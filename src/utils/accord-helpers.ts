import { Accord } from '../types/userdata';
import { aromachemicals, families } from '../data/perfumery-constants';
import { aromachemicalImages, familyImages } from '../data/image-library';

/**
 * Get the image URL for an accord.
 * If the accord has an explicit imageUrl, use that.
 * Otherwise, default to the image of the most prominent (highest percentage) aromachemical.
 */
export function getAccordImageUrl(accord: Accord): string {
	if (accord.imageUrl) {
		return accord.imageUrl;
	}

	// Find the most prominent aromachemical (highest percentage)
	if (accord.aromachemicals.length === 0) {
		// Fallback to a default image if no aromachemicals
		return familyImages.floral;
	}

	const mostProminent = accord.aromachemicals.reduce((max, current) =>
		current.percentage > max.percentage ? current : max
	);

	const aromachemical = aromachemicals.find(
		(a) => a.id === mostProminent.aromachemicalId
	);

	if (!aromachemical) {
		return familyImages.floral;
	}

	// Use aromachemical-specific image if available, otherwise use family image
	const aromachemicalImage = aromachemicalImages[aromachemical.id];
	return aromachemicalImage || familyImages[aromachemical.family];
}

/**
 * Generate a color band for an accord based on the colors of its constituent aromachemicals.
 * Returns an array of hex colors weighted by the percentage of each aromachemical.
 */
export function getAccordColorBand(accord: Accord): string[] {
	if (accord.colorBand) {
		return accord.colorBand;
	}

	// Sort aromachemicals by percentage (descending)
	const sortedIngredients = [...accord.aromachemicals].sort(
		(a, b) => b.percentage - a.percentage
	);

	// Map each aromachemical to its family color
	const colors = sortedIngredients.map((ingredient) => {
		const aromachemical = aromachemicals.find(
			(a) => a.id === ingredient.aromachemicalId
		);
		if (!aromachemical) {
			return families.floral; // Default fallback
		}
		return families[aromachemical.family];
	});

	// Remove consecutive duplicates for better visual variety
	const dedupedColors = colors.filter(
		(color, index) => index === 0 || color !== colors[index - 1]
	);

	return dedupedColors;
}

/**
 * Get a display-friendly array of aromachemical families in an accord,
 * ordered by prominence (percentage).
 */
export function getAccordFamilies(accord: Accord): string[] {
	const familySet = new Set<string>();

	// Sort by percentage to maintain order
	const sortedIngredients = [...accord.aromachemicals].sort(
		(a, b) => b.percentage - a.percentage
	);

	sortedIngredients.forEach((ingredient) => {
		const aromachemical = aromachemicals.find(
			(a) => a.id === ingredient.aromachemicalId
		);
		if (aromachemical) {
			familySet.add(aromachemical.family);
		}
	});

	return Array.from(familySet);
}
