import React from 'react';
import { SearchBar } from './SearchBar';
import './Header.css';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__title">Perfumery Reference</h1>
        <SearchBar value={searchQuery} onChange={onSearchChange} />
      </div>
    </header>
  );
};
