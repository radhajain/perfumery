import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { NetworkGraph } from './components/NetworkGraph/NetworkGraph';
import { AromachemicalDetailPanel } from './components/AromachemicalDetailPanel/AromachemicalDetailPanel';
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
import { useNavigation } from './hooks/useNavigation';
import { LayoutDimensions } from './types';
import './styles/variables.css';
import './styles/typography.css';
import './styles/animations.css';
import './App.css';

function App() {
	const location = useLocation();
	const { navigateToTab } = useNavigation();
	const [activeTab, setActiveTab] = useState<TabType>('graph');
	const [selectedNodeId, setSelectedNodeId] = useState<number | null>(null);
	const [selectedAccordId, setSelectedAccordId] = useState<string | null>(null);
	const [searchInput, setSearchInput] = useState('');
	const [hoveredNodeId, setHoveredNodeId] = useState<number | null>(null);
	const [highlightedNodeIds, setHighlightedNodeIds] = useState<Set<number>>(
		new Set()
	);

	const debouncedSearch = useDebounce(searchInput, 300);

	// Sync URL with state
	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const aromachemicalId = params.get('aromachemical');
		const accordId = params.get('accord');
		const tab = params.get('tab') as TabType | null;

		if (tab && tab !== activeTab) {
			setActiveTab(tab);
		}

		if (aromachemicalId) {
			const id = parseInt(aromachemicalId, 10);
			if (!isNaN(id) && id !== selectedNodeId) {
				setSelectedNodeId(id);
			}
		} else if (selectedNodeId) {
			setSelectedNodeId(null);
		}

		if (accordId && accordId !== selectedAccordId) {
			setSelectedAccordId(accordId);
		} else if (!accordId && selectedAccordId) {
			setSelectedAccordId(null);
		}
	}, [activeTab, location.search, selectedAccordId, selectedNodeId]);

	// Update URL when state changes - centralized handler
	const updateURL = useCallback(
		(tab: TabType, aromachemicalId?: number, accordId?: string) => {
			navigateToTab(tab, aromachemicalId, accordId);
		},
		[navigateToTab]
	);

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

	const handleNodeClick = useCallback(
		(id: number) => {
			const newId = selectedNodeId === id ? null : id;
			setSelectedNodeId(newId);
			updateURL('graph', newId ?? undefined);
		},
		[selectedNodeId, updateURL]
	);

	const handleNodeHover = useCallback((id: number | null) => {
		setHoveredNodeId(id);
	}, []);

	const handleSearchChange = useCallback((query: string) => {
		setSearchInput(query);
	}, []);

	const handleClosePanel = useCallback(() => {
		setSelectedNodeId(null);
		updateURL(activeTab);
	}, [activeTab, updateURL]);

	const handleTabChange = useCallback(
		(tab: TabType) => {
			setActiveTab(tab);
			if (tab === 'graph') {
				updateURL(tab, selectedNodeId ?? undefined);
			} else if (tab === 'accords') {
				updateURL(tab, undefined, selectedAccordId ?? undefined);
			} else {
				updateURL(tab);
			}
		},
		[selectedNodeId, selectedAccordId, updateURL]
	);

	return (
		<div className="app">
			<Header
				searchQuery={searchInput}
				onSearchChange={handleSearchChange}
				aromachemicals={aromachemicals}
			/>
			<TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />
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
							<AromachemicalDetailPanel
								aromachemical={selectedAromachemical}
								onClose={handleClosePanel}
							/>
						)}
					</>
				)}
				{activeTab === 'accords' && (
					<AccordsPanel selectedAccordId={selectedAccordId} />
				)}
				{activeTab === 'formulas' && <FormulaBuilder />}
			</main>
		</div>
	);
}

export default App;
