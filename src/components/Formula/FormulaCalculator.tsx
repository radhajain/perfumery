import React, { useMemo } from 'react';
import { FormulaIngredient } from '../../types/userdata';
import { aromachemicals } from '../../data/perfumery-constants';
import './FormulaCalculator.css';

interface FormulaCalculatorProps {
	ingredients: FormulaIngredient[];
}

export function FormulaCalculator({ ingredients }: FormulaCalculatorProps) {
	const calculations = useMemo(() => {
		const totalWeight = ingredients.reduce((sum, ing) => sum + ing.weight, 0);

		const ingredientsWithPercentages = ingredients.map((ing) => {
			const aroma = aromachemicals.find((a) => a.id === ing.aromachemicalId);
			const percentage = totalWeight > 0 ? (ing.weight / totalWeight) * 100 : 0;

			return {
				...ing,
				aroma,
				percentage,
			};
		});

		// Count notes distribution
		const noteDistribution = {
			top: 0,
			middle: 0,
			base: 0,
		};

		ingredientsWithPercentages.forEach((ing) => {
			if (ing.aroma) {
				noteDistribution[ing.aroma.note] += ing.percentage;
			}
		});

		// Check for IFRA warnings (simplified)
		const warnings: string[] = [];
		ingredientsWithPercentages.forEach((ing) => {
			if (ing.aroma && ing.aroma.ifraLimit.toLowerCase().includes('restricted')) {
				if (ing.percentage > 20) {
					warnings.push(
						`${ing.aroma.name}: High concentration (${ing.percentage.toFixed(1)}%) - Check IFRA limits`
					);
				}
			}
		});

		return {
			totalWeight,
			ingredientsWithPercentages,
			noteDistribution,
			warnings,
		};
	}, [ingredients]);

	return (
		<div className="formula-calculator">
			<h3>Formula Analysis</h3>

			<div className="formula-calculator__summary">
				<div className="formula-calculator__stat">
					<label>Total Weight:</label>
					<span className="formula-calculator__value">
						{calculations.totalWeight.toFixed(2)}g
					</span>
				</div>

				<div className="formula-calculator__stat">
					<label>Ingredients:</label>
					<span className="formula-calculator__value">
						{ingredients.length}
					</span>
				</div>
			</div>

			<div className="formula-calculator__note-distribution">
				<h4>Note Distribution</h4>
				<div className="formula-calculator__distribution-bars">
					<div className="formula-calculator__distribution-item">
						<label>Top Notes:</label>
						<div className="formula-calculator__bar-container">
							<div
								className="formula-calculator__bar formula-calculator__bar--top"
								style={{
									width: `${calculations.noteDistribution.top}%`,
								}}
							/>
						</div>
						<span>{calculations.noteDistribution.top.toFixed(1)}%</span>
					</div>

					<div className="formula-calculator__distribution-item">
						<label>Middle Notes:</label>
						<div className="formula-calculator__bar-container">
							<div
								className="formula-calculator__bar formula-calculator__bar--middle"
								style={{
									width: `${calculations.noteDistribution.middle}%`,
								}}
							/>
						</div>
						<span>{calculations.noteDistribution.middle.toFixed(1)}%</span>
					</div>

					<div className="formula-calculator__distribution-item">
						<label>Base Notes:</label>
						<div className="formula-calculator__bar-container">
							<div
								className="formula-calculator__bar formula-calculator__bar--base"
								style={{
									width: `${calculations.noteDistribution.base}%`,
								}}
							/>
						</div>
						<span>{calculations.noteDistribution.base.toFixed(1)}%</span>
					</div>
				</div>
			</div>

			<div className="formula-calculator__percentages">
				<h4>Ingredient Breakdown</h4>
				<ul className="formula-calculator__percentages-list">
					{calculations.ingredientsWithPercentages.map((ing, index) => (
						<li key={index} className="formula-calculator__percentage-item">
							<span className="formula-calculator__ingredient-name">
								{ing.aroma?.name || 'Unknown'}
							</span>
							<span className="formula-calculator__ingredient-weight">
								{ing.weight.toFixed(2)}g
							</span>
							<span className="formula-calculator__ingredient-percentage">
								{ing.percentage.toFixed(1)}%
							</span>
						</li>
					))}
				</ul>
			</div>

			{calculations.warnings.length > 0 && (
				<div className="formula-calculator__warnings">
					<h4>⚠️ IFRA Warnings</h4>
					<ul className="formula-calculator__warnings-list">
						{calculations.warnings.map((warning, index) => (
							<li key={index}>{warning}</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
