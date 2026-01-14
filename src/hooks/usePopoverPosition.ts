import { useEffect, useState, RefObject } from 'react';

interface Position {
	x: number;
	y: number;
}

/**
 * Hook to calculate and adjust popover position to ensure it stays within viewport bounds
 * @param position - Initial position from the trigger element
 * @param cardRef - Ref to the popover card element
 * @param padding - Minimum padding from viewport edges (default: 10px)
 * @returns Adjusted position that ensures the popover is visible
 */
export function usePopoverPosition<T extends HTMLElement = HTMLElement>(
	position: Position,
	cardRef: RefObject<T | null>,
	padding = 10
): Position {
	const [adjustedPosition, setAdjustedPosition] = useState(position);

	useEffect(() => {
		if (cardRef.current) {
			const card = cardRef.current;
			const rect = card.getBoundingClientRect();
			const viewportWidth = window.innerWidth;
			const viewportHeight = window.innerHeight;

			let newX = position.x;
			let newY = position.y;

			// Check horizontal bounds
			const cardLeft = newX - rect.width / 2;
			const cardRight = newX + rect.width / 2;

			if (cardLeft < padding) {
				// Too far left, align to left edge with padding
				newX = rect.width / 2 + padding;
			} else if (cardRight > viewportWidth - padding) {
				// Too far right, align to right edge with padding
				newX = viewportWidth - rect.width / 2 - padding;
			}

			// Check vertical bounds
			const cardTop = newY - rect.height - 12; // 12px for arrow/spacing
			const cardBottom = newY + rect.height + 40; // 40px for element height + spacing

			if (cardTop < padding) {
				// Not enough space above
				if (cardBottom > viewportHeight - padding) {
					// Not enough space below either, position at center of viewport
					newY = viewportHeight / 2;
				} else {
					// Position below the element
					newY = position.y + 40;
				}
			} else if (cardBottom > viewportHeight - padding && cardTop >= padding) {
				// Enough space above but would go off bottom, keep it above
				// This case is already handled, do nothing
			}

			// Final check: ensure the positioned card doesn't exceed bottom bounds
			const finalTop = newY - rect.height - 12;
			const finalBottom = newY + 12;

			if (finalBottom > viewportHeight - padding) {
				// Adjust to fit within viewport
				newY = viewportHeight - padding - 12;
			}
			if (finalTop < padding) {
				// Card is positioned below, ensure bottom fits
				const cardBottomPos = newY + rect.height + 12;
				if (cardBottomPos > viewportHeight - padding) {
					newY = viewportHeight - rect.height - padding - 12;
				}
			}

			setAdjustedPosition({ x: newX, y: newY });
		}
	}, [position, cardRef, padding]);

	return adjustedPosition;
}
