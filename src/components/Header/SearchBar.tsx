import React, { useState, useRef, useEffect } from 'react';
import { Aromachemical, ScentFamily } from '../../types';
import { families } from '../../data/perfumery-constants';
import { useNavigation } from '../../hooks/useNavigation';
import {
	aromachemicalImages,
	familyImages,
} from '../../data/image-library';
import './SearchBar.css';

interface SearchBarProps {
	value: string;
	onChange: (value: string) => void;
	aromachemicals: Aromachemical[];
}

interface SearchResult {
	type: 'aromachemical' | 'family';
	id?: number;
	name: string;
	family: ScentFamily;
	imageUrl: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
	value,
	onChange,
	aromachemicals,
}) => {
	const { navigateToAromachemical } = useNavigation();
	const [isOpen, setIsOpen] = useState(false);
	const [results, setResults] = useState<SearchResult[]>([]);
	const searchRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				searchRef.current &&
				!searchRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	useEffect(() => {
		if (!value.trim()) {
			setResults([]);
			setIsOpen(false);
			return;
		}

		const searchLower = value.toLowerCase();
		const searchResults: SearchResult[] = [];

		// Search aromachemicals
		aromachemicals.forEach((aroma) => {
			if (
				aroma.name.toLowerCase().includes(searchLower) ||
				aroma.family.toLowerCase().includes(searchLower) ||
				aroma.description.toLowerCase().includes(searchLower)
			) {
				searchResults.push({
					type: 'aromachemical',
					id: aroma.id,
					name: aroma.name,
					family: aroma.family,
					imageUrl:
						aroma.imageUrl ||
						aromachemicalImages[aroma.id] ||
						familyImages[aroma.family],
				});
			}
		});

		// Search families (unique)
		const familyMatches = new Set<ScentFamily>();
		Object.keys(families).forEach((family) => {
			if (family.toLowerCase().includes(searchLower)) {
				familyMatches.add(family as ScentFamily);
			}
		});

		// Add family results
		familyMatches.forEach((family) => {
			searchResults.push({
				type: 'family',
				name: family,
				family: family as ScentFamily,
				imageUrl: familyImages[family],
			});
		});

		// Sort: aromachemicals first, then families
		searchResults.sort((a, b) => {
			if (a.type === b.type) {
				return a.name.localeCompare(b.name);
			}
			return a.type === 'aromachemical' ? -1 : 1;
		});

		setResults(searchResults.slice(0, 10)); // Limit to 10 results
		setIsOpen(searchResults.length > 0);
	}, [value, aromachemicals]);

	const handleResultClick = (result: SearchResult) => {
		if (result.type === 'aromachemical' && result.id) {
			navigateToAromachemical(result.id);
			onChange('');
			setIsOpen(false);
		} else if (result.type === 'family') {
			onChange(result.family);
		}
	};

	return (
		<div className="search-bar" ref={searchRef}>
			<svg
				className="search-bar__icon"
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
			<input
				type="search"
				className="search-bar__input"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				onFocus={() => value.trim() && results.length > 0 && setIsOpen(true)}
				placeholder="Search aromachemicals..."
				aria-label="Search aromachemicals by name, family, or properties"
			/>

			{isOpen && results.length > 0 && (
				<div className="search-bar__dropdown">
					{results.map((result, index) => (
						<button
							key={`${result.type}-${result.id || result.name}-${index}`}
							className="search-bar__result"
							onClick={() => handleResultClick(result)}
						>
							<div className="search-bar__result-thumbnail">
								<img
									src={result.imageUrl}
									alt={result.name}
									loading="lazy"
								/>
							</div>
							<div className="search-bar__result-info">
								<span className="search-bar__result-name">{result.name}</span>
								<span
									className="search-bar__result-family"
									style={{ color: families[result.family] }}
								>
									{result.family}
								</span>
							</div>
							{result.type === 'family' && (
								<span className="search-bar__result-badge">Family</span>
							)}
						</button>
					))}
				</div>
			)}
		</div>
	);
};
