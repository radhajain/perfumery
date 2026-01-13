import { ScentFamily } from '../types';

export function getFamilyColor(
  family: ScentFamily,
  familyColors: Record<ScentFamily, string>
): string {
  return familyColors[family];
}
