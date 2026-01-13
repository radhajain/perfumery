import { Aromachemical, SearchResult } from '../types';

export function searchAromachemicals(
  aromachemicals: Aromachemical[],
  query: string
): SearchResult[] {
  if (!query.trim()) return [];

  const normalizedQuery = query.toLowerCase().trim();

  const results = aromachemicals
    .map((aroma) => {
      let score = 0;

      if (aroma.name.toLowerCase().includes(normalizedQuery)) {
        score += 100;
        if (aroma.name.toLowerCase().startsWith(normalizedQuery)) {
          score += 50;
        }
      }

      if (aroma.family.toLowerCase().includes(normalizedQuery)) {
        score += 30;
      }

      if (aroma.note.toLowerCase().includes(normalizedQuery)) {
        score += 20;
      }

      if (aroma.description.toLowerCase().includes(normalizedQuery)) {
        score += 10;
      }

      if (aroma.manufacturer.toLowerCase().includes(normalizedQuery)) {
        score += 15;
      }

      if (aroma.origin.toLowerCase().includes(normalizedQuery)) {
        score += 10;
      }

      if (aroma.perfumes.some((p) => p.toLowerCase().includes(normalizedQuery))) {
        score += 25;
      }

      return {
        id: aroma.id,
        name: aroma.name,
        family: aroma.family,
        matchScore: score,
      };
    })
    .filter((result) => result.matchScore > 0)
    .sort((a, b) => b.matchScore - a.matchScore);

  return results;
}
