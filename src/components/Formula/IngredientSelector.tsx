import React, { useState, useMemo } from 'react';
import { aromachemicals, families } from '../../data/perfumery-constants';
import { searchAromachemicals } from '../../utils/searchUtils';
import './IngredientSelector.css';

interface IngredientSelectorProps {
	onSelect: (aromachemicalId: number) => void;
}

export function IngredientSelector({ onSelect }: IngredientSelectorProps) {
	const [searchQuery, setSearchQuery] = useState('');
	const [isOpen, setIsOpen] = useState(false);

	const searchResults = useMemo(() => {
		if (!searchQuery.trim()) return [];
		return searchAromachemicals(aromachemicals, searchQuery).slice(0, 10);
	}, [searchQuery]);

	const handleSelect = (id: number) => {
		onSelect(id);
		setSearchQuery('');
		setIsOpen(false);
	};

	return (
		<div className="ingredient-selector">
			<input
				type="text"
				className="ingredient-selector__input"
				placeholder="Search aromachemicals to add..."
				value={searchQuery}
				onChange={(e) => {
					setSearchQuery(e.target.value);
					setIsOpen(true);
				}}
				onFocus={() => setIsOpen(true)}
				onBlur={() => setTimeout(() => setIsOpen(false), 200)}
			/>

			{isOpen && searchResults.length > 0 && (
				<ul className="ingredient-selector__results">
					{searchResults.map((result) => {
						const aroma = aromachemicals.find((a) => a.id === result.id);
						if (!aroma) return null;

						return (
							<li
								key={result.id}
								className="ingredient-selector__result-item"
								onClick={() => handleSelect(result.id)}
							>
								<span
									className="ingredient-selector__result-badge"
									style={{
										backgroundColor: families[aroma.family],
									}}
								>
									{aroma.name}
								</span>
								<span className="ingredient-selector__result-note">
									{aroma.note}
								</span>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
}
