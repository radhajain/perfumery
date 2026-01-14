import React, { useEffect, useState, useRef } from 'react';
import { GraphNode } from '../../types';
import { aromachemicals } from '../../data/perfumery-constants';
import { AromachemicalInfoCardContent } from '../common/AromachemicalInfoCardContent';
import './AromachemicalInfoCard.css';

interface AromachemicalInfoCardProps {
	node: GraphNode;
	position: { x: number; y: number };
}

export const AromachemicalInfoCard: React.FC<AromachemicalInfoCardProps> = ({
	node,
	position,
}) => {
	const aromachemical = aromachemicals.find((a) => a.id === node.id)!;

	const cardRef = useRef<HTMLDivElement>(null);
	const [adjustedPosition, setAdjustedPosition] = useState({
		x: position.x - 150,
		y: position.y - 160,
	});
	const [dimensions, setDimensions] = useState({ width: 300, height: 150 });

	useEffect(() => {
		if (cardRef.current) {
			const card = cardRef.current;
			const rect = card.getBoundingClientRect();
			const viewportWidth = window.innerWidth;

			const cardWidth = 300;
			const cardHeight = rect.height;
			let newX = position.x - cardWidth / 2;
			let newY = position.y - cardHeight - 12;

			// Check horizontal bounds
			if (newX < 10) {
				// Too far left, align to left edge with padding
				newX = 10;
			} else if (newX + cardWidth > viewportWidth - 10) {
				// Too far right, align to right edge with padding
				newX = viewportWidth - cardWidth - 10;
			}

			// Check vertical bounds
			// Account for tab navigation at top (approximately 60px)
			const topPadding = 70;
			if (newY < topPadding) {
				// Not enough space above, position below instead
				newY = position.y + 40;
			}

			setAdjustedPosition({ x: newX, y: newY });
			setDimensions({ width: cardWidth, height: cardHeight });
		}
	}, [position]);

	return (
		<foreignObject
			x={adjustedPosition.x}
			y={adjustedPosition.y}
			width={dimensions.width}
			height={dimensions.height}
			pointerEvents="none"
		>
			<div ref={cardRef}>
				<AromachemicalInfoCardContent
					aromachemical={aromachemical}
					className="info-card"
				/>
			</div>
		</foreignObject>
	);
};
