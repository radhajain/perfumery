import React from 'react';
import './AccordRating.css';

interface AccordRatingProps {
	rating?: number;
	onRate?: (rating: number) => void;
	readonly?: boolean;
}

export function AccordRating({
	rating = 0,
	onRate,
	readonly = false,
}: AccordRatingProps) {
	const stars = [1, 2, 3, 4, 5];

	return (
		<div className="accord-rating">
			{stars.map((star) => (
				<button
					key={star}
					className={`accord-rating__star ${
						star <= rating ? 'accord-rating__star--filled' : ''
					}`}
					onClick={() => !readonly && onRate?.(star)}
					disabled={readonly}
					aria-label={`Rate ${star} stars`}
				>
					★
				</button>
			))}
		</div>
	);
}
