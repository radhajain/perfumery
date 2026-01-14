import React, { useState } from 'react';
import { FormulaIngredient } from '../../types/userdata';
import { aromachemicals, families } from '../../data/perfumery-constants';
import { InfoCardPopover } from '../common/InfoCardPopover';
import './IngredientRow.css';

interface IngredientRowProps {
	ingredient: FormulaIngredient;
	onUpdate: (updates: Partial<FormulaIngredient>) => void;
	onRemove: () => void;
	onAromachemicalClick?: (id: number) => void;
}

export function IngredientRow({
	ingredient,
	onUpdate,
	onRemove,
	onAromachemicalClick,
}: IngredientRowProps) {
	const [hoveredAromachemical, setHoveredAromachemical] = useState<{
		id: number;
		position: { x: number; y: number };
	} | null>(null);

	const aroma = aromachemicals.find(
		(a) => a.id === ingredient.aromachemicalId
	);

	if (!aroma) return null;

	return (
		<div className="ingredient-row">
			<div className="ingredient-row__info">
				<span
					className={`ingredient-row__badge ${
						onAromachemicalClick ? 'ingredient-row__badge--clickable' : ''
					}`}
					style={{
						backgroundColor: families[aroma.family],
					}}
					onClick={() => onAromachemicalClick?.(ingredient.aromachemicalId)}
					onMouseEnter={(e) => {
						const rect = e.currentTarget.getBoundingClientRect();
						setHoveredAromachemical({
							id: ingredient.aromachemicalId,
							position: {
								x: rect.left + rect.width / 2,
								y: rect.top,
							},
						});
					}}
					onMouseLeave={() => setHoveredAromachemical(null)}
				>
					{aroma.name}
				</span>
				<span className="ingredient-row__note">{aroma.note}</span>
			</div>

			<div className="ingredient-row__controls">
				<div className="ingredient-row__weight">
					<input
						type="number"
						className="ingredient-row__weight-input"
						value={ingredient.weight}
						onChange={(e) =>
							onUpdate({ weight: parseFloat(e.target.value) || 0 })
						}
						min="0"
						step="0.1"
					/>
					<span className="ingredient-row__unit">g</span>
				</div>

				<input
					type="number"
					className="ingredient-row__dilution-input"
					placeholder="Dilution %"
					value={ingredient.dilution || ''}
					onChange={(e) =>
						onUpdate({
							dilution: e.target.value ? parseFloat(e.target.value) : undefined,
						})
					}
					min="0"
					max="100"
					step="1"
				/>

				<button
					className="ingredient-row__remove-button"
					onClick={onRemove}
					title="Remove ingredient"
				>
					×
				</button>
			</div>

			{ingredient.notes && (
				<div className="ingredient-row__notes">{ingredient.notes}</div>
			)}

			{hoveredAromachemical && (
				<InfoCardPopover
					aromachemical={
						aromachemicals.find((a) => a.id === hoveredAromachemical.id)!
					}
					position={hoveredAromachemical.position}
				/>
			)}
		</div>
	);
}
