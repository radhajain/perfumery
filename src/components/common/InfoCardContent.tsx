import React from 'react';
import { Aromachemical } from '../../types';
import { aromachemicalImages, familyImages } from '../../data/image-library';
import { families } from '../../data/perfumery-constants';

interface InfoCardContentProps {
	aromachemical: Aromachemical;
	className?: string;
}

export const InfoCardContent: React.FC<InfoCardContentProps> = ({
	aromachemical,
	className = '',
}) => {
	const familyColor = families[aromachemical.family];
	const imageUrl =
		aromachemical.imageUrl ||
		aromachemicalImages[aromachemical.id] ||
		familyImages[aromachemical.family];

	return (
		<div className={className}>
			<div
				className={`${className}__color-bar`}
				style={{ backgroundColor: familyColor }}
			/>
			<div className={`${className}__content`}>
				<div className={`${className}__main`}>
					<div className={`${className}__text`}>
						<h3 className={`${className}__title`}>{aromachemical.name}</h3>
						<div className={`${className}__tags`}>
							<span
								className={`${className}__tag`}
								style={{ backgroundColor: familyColor }}
							>
								{aromachemical.family}
							</span>
							<span className={`${className}__tag ${className}__tag--note`}>
								{aromachemical.note} note
							</span>
						</div>
						<p className={`${className}__description`}>
							{aromachemical.description}
						</p>
					</div>
					{imageUrl && (
						<div className={`${className}__thumbnail`}>
							<img
								src={imageUrl}
								alt={aromachemical.name}
								className={`${className}__image`}
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
