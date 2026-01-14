import React, { useEffect, useRef, useState } from 'react';
import { Accord } from '../../types/userdata';
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
	const [adjustedPosition, setAdjustedPosition] = useState(position);

	useEffect(() => {
		if (cardRef.current) {
			const card = cardRef.current;
			const rect = card.getBoundingClientRect();
			const viewportWidth = window.innerWidth;

			let newX = position.x;
			let newY = position.y;

			// Check horizontal bounds
			const cardLeft = newX - rect.width / 2;
			const cardRight = newX + rect.width / 2;

			if (cardLeft < 10) {
				// Too far left, align to left edge with padding
				newX = rect.width / 2 + 10;
			} else if (cardRight > viewportWidth - 10) {
				// Too far right, align to right edge with padding
				newX = viewportWidth - rect.width / 2 - 10;
			}

			// Check vertical bounds
			const cardTop = newY - rect.height - 12;
			if (cardTop < 10) {
				// Not enough space above, position below instead
				newY = position.y + 40; // Position below the element
			}

			setAdjustedPosition({ x: newX, y: newY });
		}
	}, [position]);

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
			<div className="accord-info-card__content">
				<h4 className="accord-info-card__title">{accord.name}</h4>
				{accord.category && (
					<span className="accord-info-card__category">{accord.category}</span>
				)}
				<p className="accord-info-card__description">{accord.description}</p>
			</div>
		</div>
	);
};
