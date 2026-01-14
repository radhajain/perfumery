import React, { useRef } from 'react';
import { Aromachemical } from '../../types';
import { AromachemicalInfoCardContent } from './AromachemicalInfoCardContent';
import { usePopoverPosition } from '../../hooks/usePopoverPosition';
import './AromachemicalInfoCardPopover.css';

interface AromachemicalInfoCardPopoverProps {
	aromachemical: Aromachemical;
	position: { x: number; y: number };
}

export const AromachemicalInfoCardPopover: React.FC<
	AromachemicalInfoCardPopoverProps
> = ({ aromachemical, position }) => {
	const cardRef = useRef<HTMLDivElement>(null);
	const adjustedPosition = usePopoverPosition(position, cardRef);

	return (
		<div
			ref={cardRef}
			style={{
				position: 'fixed',
				left: `${adjustedPosition.x}px`,
				top: `${adjustedPosition.y}px`,
			}}
		>
			<AromachemicalInfoCardContent
				aromachemical={aromachemical}
				className="info-card-popover"
			/>
		</div>
	);
};
