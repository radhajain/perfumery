import React from 'react';
import { ScentFamily } from '../../types';
import './Legend.css';

interface LegendProps {
	families: Record<ScentFamily, string>;
	familyOrder: ScentFamily[];
}

export const Legend: React.FC<LegendProps> = ({ families, familyOrder }) => {
	return (
		<div className="legend">
			<div className="legend__section">
				<h3 className="legend__title">Scent Families</h3>
				<div className="legend__items">
					{familyOrder.map((family) => (
						<div key={family} className="legend__item">
							<div
								className="legend__color"
								style={{ backgroundColor: families[family] }}
							/>
							<span className="legend__label">{family}</span>
						</div>
					))}
				</div>
			</div>
			<div className="legend__section">
				<h3 className="legend__title">Node Size</h3>
				<div className="legend__size-guide">
					<div className="legend__size-item">
						<svg width="24" height="24" viewBox="0 0 24 24">
							<circle cx="12" cy="12" r="5" fill="var(--color-taupe)" />
						</svg>
						<span className="legend__label">Less popular</span>
					</div>
					<div className="legend__size-item">
						<svg width="32" height="32" viewBox="0 0 32 32">
							<circle cx="16" cy="16" r="10" fill="var(--color-taupe)" />
						</svg>
						<span className="legend__label">More popular</span>
					</div>
				</div>
			</div>
		</div>
	);
};
