import React, { useRef } from 'react';
import { Aromachemical } from '../../types';
import { InfoCardContent } from './InfoCardContent';
import { usePopoverPosition } from '../../hooks/usePopoverPosition';
import './InfoCardPopover.css';

interface InfoCardPopoverProps {
	aromachemical: Aromachemical;
	position: { x: number; y: number };
}

export const InfoCardPopover: React.FC<InfoCardPopoverProps> = ({
	aromachemical,
	position,
}) => {
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
			<InfoCardContent
				aromachemical={aromachemical}
				className="info-card-popover"
			/>
		</div>
	);
};
