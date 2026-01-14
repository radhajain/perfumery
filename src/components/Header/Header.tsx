import React from 'react';
import { Aromachemical } from '../../types';
import { SearchBar } from './SearchBar';
import './Header.css';

interface HeaderProps {
	searchQuery: string;
	onSearchChange: (query: string) => void;
	aromachemicals: Aromachemical[];
}

export const Header: React.FC<HeaderProps> = ({
	searchQuery,
	onSearchChange,
	aromachemicals,
}) => {
	return (
		<header className="header">
			<div className="header__content">
				<div className="header__title-container">
					<img src="/logo.png" alt="Perfumery Logo" className="header__logo" />
					<h1 className="header__title">Perfumery: molecular exploration</h1>
				</div>
				<SearchBar
					value={searchQuery}
					onChange={onSearchChange}
					aromachemicals={aromachemicals}
				/>
			</div>
		</header>
	);
};
