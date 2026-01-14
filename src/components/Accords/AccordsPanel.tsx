import React, { useState, useMemo, useEffect, useRef } from 'react';
import { POPULAR_ACCORDS } from '../../data/popular-accords';
import { AccordCard } from './AccordCard';
import { AccordCreator } from './AccordCreator';
import { useUserData } from '../../contexts/UserDataContext';
import { AccordIngredient } from '../../types/userdata';
import './AccordsPanel.css';

interface AccordsPanelProps {
	selectedAccordId?: string | null;
}

export function AccordsPanel({ selectedAccordId }: AccordsPanelProps) {
	const { customAccords, addAccord } = useUserData();
	const [filter, setFilter] = useState<'all' | 'popular' | 'custom'>('all');
	const [showCreator, setShowCreator] = useState(false);
	const accordRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

	const allAccords = useMemo(() => {
		return [...POPULAR_ACCORDS, ...customAccords];
	}, [customAccords]);

	const filteredAccords = useMemo(() => {
		if (filter === 'popular') {
			return POPULAR_ACCORDS;
		}
		if (filter === 'custom') {
			return customAccords;
		}
		return allAccords;
	}, [filter, customAccords, allAccords]);

	// Scroll to and highlight selected accord
	useEffect(() => {
		if (selectedAccordId && accordRefs.current[selectedAccordId]) {
			const element = accordRefs.current[selectedAccordId];
			if (element) {
				// Scroll to the element
				element.scrollIntoView({
					behavior: 'smooth',
					block: 'center',
				});

				// Add highlight class
				element.classList.add('accord-card--highlighted');

				// Remove highlight after animation
				const timer = setTimeout(() => {
					element.classList.remove('accord-card--highlighted');
				}, 2000);

				return () => clearTimeout(timer);
			}
		}
	}, [selectedAccordId]);

	const handleCreateAccord = (accord: {
		name: string;
		description: string;
		category?: string;
		aromachemicals: AccordIngredient[];
	}) => {
		const validCategory =
			accord.category === 'classic' ||
			accord.category === 'modern' ||
			accord.category === 'niche'
				? accord.category
				: undefined;

		addAccord({
			name: accord.name,
			description: accord.description,
			category: validCategory,
			aromachemicals: accord.aromachemicals,
			isPreDefined: false,
		});
		setShowCreator(false);
		setFilter('custom');
	};

	return (
		<div className="accords-panel">
			<div className="accords-panel__filters">
				<button
					className={`accords-panel__filter-pill ${
						filter === 'all' ? 'accords-panel__filter-pill--active' : ''
					}`}
					onClick={() => setFilter('all')}
				>
					All ({allAccords.length})
				</button>
				<button
					className={`accords-panel__filter-pill ${
						filter === 'popular' ? 'accords-panel__filter-pill--active' : ''
					}`}
					onClick={() => setFilter('popular')}
				>
					Popular ({POPULAR_ACCORDS.length})
				</button>
				<button
					className={`accords-panel__filter-pill ${
						filter === 'custom' ? 'accords-panel__filter-pill--active' : ''
					}`}
					onClick={() => setFilter('custom')}
				>
					My Own ({customAccords.length})
				</button>
				<button
					className="accords-panel__create-pill"
					onClick={() => setShowCreator(true)}
				>
					+ Create
				</button>
			</div>

			<div className="accords-panel__content">
				<div className="accords-panel__grid">
					{filteredAccords.length === 0 ? (
						<div className="accords-panel__empty">
							<p>No accords to display.</p>
							{filter === 'custom' && (
								<button
									className="accords-panel__create-button"
									onClick={() => setShowCreator(true)}
								>
									+ Create Your First Accord
								</button>
							)}
						</div>
					) : (
						filteredAccords.map((accord) => (
							<div
								key={accord.id}
								ref={(el) => {
									accordRefs.current[accord.id] = el;
								}}
							>
								<AccordCard accord={accord} />
							</div>
						))
					)}
				</div>
			</div>

			{showCreator && (
				<AccordCreator
					onClose={() => setShowCreator(false)}
					onSave={handleCreateAccord}
				/>
			)}
		</div>
	);
}
