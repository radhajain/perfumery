import React from 'react';
import { GraphNode } from '../../types';
import {
	aromachemicalImages,
	familyImages,
} from '../../data/image-library';
import './InfoCard.css';

interface InfoCardProps {
	node: GraphNode;
	familyColor: string;
	position: { x: number; y: number };
}

export const InfoCard: React.FC<InfoCardProps> = ({
	node,
	familyColor,
	position,
}) => {
	const imageUrl =
		node.data.imageUrl ||
		aromachemicalImages[node.id] ||
		familyImages[node.family];

	return (
		<foreignObject
			x={position.x - 150}
			y={position.y - 160}
			width={300}
			height={150}
			pointerEvents="none"
		>
			<div className="info-card">
				<div
					className="info-card__color-bar"
					style={{ backgroundColor: familyColor }}
				/>
				<div className="info-card__content">
					<div className="info-card__main">
						<div className="info-card__text">
							<h3 className="info-card__title">{node.name}</h3>
							<p className="info-card__family">{node.family}</p>
							<p className="info-card__description">
								{node.description.split('.')[0]}.
							</p>
						</div>
						{imageUrl && (
							<div className="info-card__thumbnail">
								<img
									src={imageUrl}
									alt={node.name}
									className="info-card__image"
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</foreignObject>
	);
};
