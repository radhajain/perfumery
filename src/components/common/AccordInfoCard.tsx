import React, { useRef } from 'react';
import { Accord } from '../../types/userdata';
import {
	getAccordImageUrl,
	getAccordColorBand,
} from '../../utils/accord-helpers';
import { usePopoverPosition } from '../../hooks/usePopoverPosition';
import './AccordInfoCard.css';

interface AccordInfoCardProps {
	accord: Accord;
	position: { x: number; y: number };
}

export const AccordInfoCard: React.FC<AccordInfoCardProps> = ({
	accord,
	position,
}) => {
	const cardRef = useRef<HTMLDivElement>(null);
	const adjustedPosition = usePopoverPosition(position, cardRef);

	const imageUrl = getAccordImageUrl(accord);
	const colorBand = getAccordColorBand(accord);

	return (
		<div
			ref={cardRef}
			className="accord-info-card"
			style={{
				position: 'fixed',
				left: `${adjustedPosition.x}px`,
				top: `${adjustedPosition.y}px`,
			}}
		>
			{/* Thumbnail image */}
			<div className="accord-info-card__image-container">
				<img
					src={imageUrl}
					alt={accord.name}
					className="accord-info-card__image"
				/>
			</div>

			{/* Color band */}
			<div className="accord-info-card__color-band">
				{colorBand.map((color, index) => (
					<div
						key={index}
						className="accord-info-card__color-segment"
						style={{ backgroundColor: color }}
					/>
				))}
			</div>

			<div className="accord-info-card__content">
				<div className="accord-info-card__title-container">
					<h4 className="accord-info-card__title">{accord.name}</h4>
					{accord.category && (
						<span className="accord-info-card__category">
							{accord.category}
						</span>
					)}
				</div>
				<p className="accord-info-card__description">{accord.description}</p>
			</div>
		</div>
	);
};
