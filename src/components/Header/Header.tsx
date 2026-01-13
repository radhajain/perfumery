import React from 'react';
import { Aromachemical } from '../../types';
import { SearchBar } from './SearchBar';
import './Header.css';

interface HeaderProps {
	searchQuery: string;
	onSearchChange: (query: string) => void;
	aromachemicals: Aromachemical[];
	onSearchResultClick: (id: number) => void;
}

export const Header: React.FC<HeaderProps> = ({
	searchQuery,
	onSearchChange,
	aromachemicals,
	onSearchResultClick,
}) => {
	return (
		<header className="header">
			<div className="header__content">
				<h1 className="header__title">Perfumery Reference</h1>
				<SearchBar
					value={searchQuery}
					onChange={onSearchChange}
					aromachemicals={aromachemicals}
					onResultClick={onSearchResultClick}
				/>
			</div>
		</header>
	);
};
