import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Header } from './components/Header/Header';
import { NetworkGraph } from './components/NetworkGraph/NetworkGraph';
import { DetailPanel } from './components/DetailPanel/DetailPanel';
import { Legend } from './components/common/Legend';
import { TabNavigation, TabType } from './components/Layout/TabNavigation';
import { AccordsPanel } from './components/Accords/AccordsPanel';
import { FormulaBuilder } from './components/Formula/FormulaBuilder';
import {
	aromachemicals,
	familyOrder,
	families,
} from './data/perfumery-constants';
import { calculateGraphLayout } from './utils/graphLayout';
import { calculateEdges } from './utils/edgeCalculator';
import { searchAromachemicals } from './utils/searchUtils';
import { useDebounce } from './hooks/useDebounce';
import { LayoutDimensions } from './types';
import './styles/variables.css';
import './styles/typography.css';
import './styles/animations.css';
import './App.css';

function App() {
	const [activeTab, setActiveTab] = useState<TabType>('graph');
	const [selectedNodeId, setSelectedNodeId] = useState<number | null>(null);
	const [searchInput, setSearchInput] = useState('');
	const [hoveredNodeId, setHoveredNodeId] = useState<number | null>(null);
	const [highlightedNodeIds, setHighlightedNodeIds] = useState<Set<number>>(
		new Set()
	);

	const debouncedSearch = useDebounce(searchInput, 300);

	const dimensions: LayoutDimensions = useMemo(
		() => ({
			width: window.innerWidth - (selectedNodeId ? 400 : 0),
			height: window.innerHeight - 100,
			margin: { top: 40, right: 40, bottom: 40, left: 40 },
		}),
		[selectedNodeId]
	);

	const graphData = useMemo(
		() => ({
			nodes: calculateGraphLayout(
				aromachemicals,
				dimensions,
				familyOrder,
				families
			),
			edges: calculateEdges(aromachemicals),
		}),
		[dimensions]
	);

	const selectedAromachemical = useMemo(
		() =>
			selectedNodeId
				? aromachemicals.find((a) => a.id === selectedNodeId) || null
				: null,
		[selectedNodeId]
	);

	const searchResults = useMemo(
		() => searchAromachemicals(aromachemicals, debouncedSearch),
		[debouncedSearch]
	);

	useEffect(() => {
		const highlighted = new Set<number>();

		if (searchResults.length > 0) {
			searchResults.forEach((r) => highlighted.add(r.id));
		}

		if (selectedNodeId) {
			highlighted.add(selectedNodeId);
			const selected = aromachemicals.find((a) => a.id === selectedNodeId);
			selected?.pairings.forEach((id) => highlighted.add(id));
		}

		setHighlightedNodeIds(highlighted);
	}, [searchResults, selectedNodeId]);

	const handleNodeClick = useCallback((id: number) => {
		setSelectedNodeId((prev) => (prev === id ? null : id));
	}, []);

	const handleNodeHover = useCallback((id: number | null) => {
		setHoveredNodeId(id);
	}, []);

	const handleSearchChange = useCallback((query: string) => {
		setSearchInput(query);
	}, []);

	const handlePairingClick = useCallback((id: number) => {
		setSelectedNodeId(id);
	}, []);

	const handleClosePanel = useCallback(() => {
		setSelectedNodeId(null);
	}, []);

	const handleSearchResultClick = useCallback((id: number) => {
		setSelectedNodeId(id);
	}, []);

	const handleAromachemicalClick = useCallback((id: number) => {
		setSelectedNodeId(id);
		setActiveTab('graph');
	}, []);

	return (
		<div className="app">
			<Header
				searchQuery={searchInput}
				onSearchChange={handleSearchChange}
				aromachemicals={aromachemicals}
				onSearchResultClick={handleSearchResultClick}
			/>
			<TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
			<main className="main-content">
				{activeTab === 'graph' && (
					<>
						<NetworkGraph
							graphData={graphData}
							selectedNodeId={selectedNodeId}
							hoveredNodeId={hoveredNodeId}
							highlightedNodeIds={highlightedNodeIds}
							onNodeClick={handleNodeClick}
							onNodeHover={handleNodeHover}
							dimensions={dimensions}
						/>
						<Legend families={families} familyOrder={familyOrder} />
						{selectedAromachemical && (
							<DetailPanel
								aromachemical={selectedAromachemical}
								onClose={handleClosePanel}
								onPairingClick={handlePairingClick}
							/>
						)}
					</>
				)}
				{activeTab === 'accords' && <AccordsPanel onAromachemicalClick={handleAromachemicalClick} />}
				{activeTab === 'formulas' && <FormulaBuilder onAromachemicalClick={handleAromachemicalClick} />}
			</main>
		</div>
	);
}

export default App;
