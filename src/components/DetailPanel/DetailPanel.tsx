import React from 'react';
import { Aromachemical } from '../../types';
import { aromachemicals, families } from '../../data/perfumery-constants';
import {
	aromachemicalImages,
	chemicalStructures,
	familyImages,
} from '../../data/image-library';
import { ImagePlaceholder } from '../common/ImagePlaceholder';
import { PairingChip } from '../common/PairingChip';
import { NoteEditor } from '../Notes/NoteEditor';
import './DetailPanel.css';

interface DetailPanelProps {
	aromachemical: Aromachemical | null;
	onClose: () => void;
	onPairingClick: (id: number) => void;
}

export const DetailPanel: React.FC<DetailPanelProps> = ({
	aromachemical,
	onClose,
	onPairingClick,
}) => {
	if (!aromachemical) return null;

	const getPairingById = (id: number) => {
		return aromachemicals.find((a) => a.id === id);
	};

	return (
		<div
			className="detail-panel slide-in-right"
			role="complementary"
			aria-label="Aromachemical details"
		>
			<div className="detail-panel__header">
				<div>
					<ImagePlaceholder
						type="visual"
						aspectRatio="20/9"
						alt={`Visual representation of ${aromachemical.name}`}
						imageUrl={
							aromachemical.imageUrl ||
							aromachemicalImages[aromachemical.id] ||
							familyImages[aromachemical.family]
						}
					/>
					<h2 className="detail-panel__name">{aromachemical.name}</h2>
					<div className="detail-panel__badges">
						<span
							className="detail-panel__badge"
							style={{ backgroundColor: families[aromachemical.family] }}
						>
							{aromachemical.family}
						</span>
						<span className="detail-panel__badge detail-panel__badge--note">
							{aromachemical.note} note
						</span>
					</div>
				</div>
				<button
					className="detail-panel__close"
					onClick={onClose}
					aria-label="Close detail panel"
				>
					×
				</button>
			</div>

			<div className="detail-panel__content">
				<div className="detail-panel__section">
					<h3 className="detail-panel__section-title">Description</h3>
					<p>{aromachemical.description}</p>
				</div>

				<div className="detail-panel__section">
					<h3 className="detail-panel__section-title">My Notes</h3>
					<NoteEditor aromachemicalId={aromachemical.id} />
				</div>

				<div className="detail-panel__section">
					<h3 className="detail-panel__section-title">Pairing Suggestions</h3>
					<p>{aromachemical.pairingDetail}</p>
					<div className="detail-panel__pairings">
						{aromachemical.pairings.map((pairingId) => {
							const pairing = getPairingById(pairingId);
							if (!pairing) return null;
							return (
								<PairingChip
									key={pairingId}
									name={pairing.name}
									family={pairing.family}
									familyColor={families[pairing.family]}
									onClick={() => onPairingClick(pairingId)}
								/>
							);
						})}
					</div>
				</div>

				<div className="detail-panel__section">
					<h3 className="detail-panel__section-title">Famous Perfumes</h3>
					<ul className="detail-panel__perfume-list">
						{aromachemical.perfumes.map((perfume, index) => (
							<li key={index}>{perfume}</li>
						))}
					</ul>
				</div>

				<div className="detail-panel__section">
					<h3 className="detail-panel__section-title">Origin</h3>
					<p>{aromachemical.origin}</p>
				</div>

				<div className="detail-panel__section">
					<h3 className="detail-panel__section-title">How it wears</h3>
					<p>
						<b>Substantivity:</b> {aromachemical.substantivity}
					</p>
					<p>
						<b>Impact:</b> {aromachemical.impactSillage}
					</p>
				</div>

				<div className="detail-panel__section">
					<ImagePlaceholder
						type="chemical"
						aspectRatio="2/1"
						alt={`Chemical structure of ${aromachemical.name}`}
						imageUrl={
							aromachemical.chemicalImageUrl ||
							chemicalStructures[aromachemical.id] ||
							undefined
						}
					/>
					<p className="detail-panel__formula">{aromachemical.structure}</p>
				</div>

				<div className="detail-panel__section">
					<h3 className="detail-panel__section-title">Manufacturer</h3>
					<p>{aromachemical.manufacturer}</p>
				</div>

				<div className="detail-panel__section">
					<h3 className="detail-panel__section-title">Dilution</h3>
					<p>{aromachemical.dilution}</p>
				</div>

				<div className="detail-panel__section">
					<h3 className="detail-panel__section-title">IFRA Limits</h3>
					<p>{aromachemical.ifraLimit}</p>
				</div>
			</div>
		</div>
	);
};
