import React from 'react';
import './TabNavigation.css';

export type TabType = 'graph' | 'accords' | 'formulas';

interface TabNavigationProps {
	activeTab: TabType;
	onTabChange: (tab: TabType) => void;
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
	return (
		<nav className="tab-navigation">
			<button
				className={`tab-navigation__tab ${
					activeTab === 'graph' ? 'tab-navigation__tab--active' : ''
				}`}
				onClick={() => onTabChange('graph')}
			>
				Graph
			</button>
			<button
				className={`tab-navigation__tab ${
					activeTab === 'accords' ? 'tab-navigation__tab--active' : ''
				}`}
				onClick={() => onTabChange('accords')}
			>
				Accords
			</button>
			<button
				className={`tab-navigation__tab ${
					activeTab === 'formulas' ? 'tab-navigation__tab--active' : ''
				}`}
				onClick={() => onTabChange('formulas')}
			>
				Formulas
			</button>
		</nav>
	);
}
