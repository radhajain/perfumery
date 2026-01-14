import React, { useState } from 'react';
import { POPULAR_ACCORDS } from '../../data/popular-accords';
import { AccordCard } from './AccordCard';
import { useUserData } from '../../contexts/UserDataContext';
import './AccordsPanel.css';

export function AccordsPanel() {
	const { customAccords } = useUserData();
	const [showSection, setShowSection] = useState<'popular' | 'custom'>(
		'popular'
	);

	return (
		<div className="accords-panel">
			<div className="accords-panel__header">
				<h1 className="accords-panel__title">Accords</h1>
				<p className="accords-panel__subtitle">
					Explore classic perfumery accords and create your own
				</p>
			</div>

			<div className="accords-panel__tabs">
				<button
					className={`accords-panel__tab ${
						showSection === 'popular' ? 'accords-panel__tab--active' : ''
					}`}
					onClick={() => setShowSection('popular')}
				>
					Popular Accords ({POPULAR_ACCORDS.length})
				</button>
				<button
					className={`accords-panel__tab ${
						showSection === 'custom' ? 'accords-panel__tab--active' : ''
					}`}
					onClick={() => setShowSection('custom')}
				>
					My Accords ({customAccords.length})
				</button>
			</div>

			<div className="accords-panel__content">
				{showSection === 'popular' && (
					<div className="accords-panel__grid">
						{POPULAR_ACCORDS.map((accord) => (
							<AccordCard key={accord.id} accord={accord} />
						))}
					</div>
				)}

				{showSection === 'custom' && (
					<div className="accords-panel__grid">
						{customAccords.length === 0 ? (
							<div className="accords-panel__empty">
								<p>You haven't created any custom accords yet.</p>
								<button className="accords-panel__create-button">
									+ Create Your First Accord
								</button>
							</div>
						) : (
							customAccords.map((accord) => (
								<AccordCard key={accord.id} accord={accord} />
							))
						)}
					</div>
				)}
			</div>
		</div>
	);
}
