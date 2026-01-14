import React, { useState } from 'react';
import { Formula, FormulaIngredient } from '../../types/userdata';
import { useUserData } from '../../contexts/UserDataContext';
import { IngredientSelector } from './IngredientSelector';
import { IngredientRow } from './IngredientRow';
import { FormulaCalculator } from './FormulaCalculator';
import { AccordRating } from '../Accords/AccordRating';
import './FormulaBuilder.css';

interface FormulaBuilderProps {
	onAromachemicalClick?: (id: number) => void;
}

export function FormulaBuilder({ onAromachemicalClick }: FormulaBuilderProps) {
	const { formulas, addFormula, updateFormula, deleteFormula } = useUserData();
	const [selectedFormulaId, setSelectedFormulaId] = useState<string | null>(
		null
	);
	const [editingFormula, setEditingFormula] = useState<{
		name: string;
		description: string;
		ingredients: FormulaIngredient[];
		userNotes: string;
		userRating: number;
	} | null>(null);

	const startNewFormula = () => {
		setEditingFormula({
			name: '',
			description: '',
			ingredients: [],
			userNotes: '',
			userRating: 0,
		});
		setSelectedFormulaId(null);
	};

	const loadFormula = (formula: Formula) => {
		setEditingFormula({
			name: formula.name,
			description: formula.description || '',
			ingredients: formula.ingredients,
			userNotes: formula.userNotes || '',
			userRating: formula.userRating || 0,
		});
		setSelectedFormulaId(formula.id);
	};

	const saveFormula = () => {
		if (!editingFormula || !editingFormula.name.trim()) return;

		const totalWeight = editingFormula.ingredients.reduce(
			(sum, ing) => sum + ing.weight,
			0
		);

		if (selectedFormulaId) {
			updateFormula(selectedFormulaId, {
				...editingFormula,
				totalWeight,
			});
		} else {
			addFormula({
				...editingFormula,
				totalWeight,
			});
		}

		setEditingFormula(null);
		setSelectedFormulaId(null);
	};

	const handleDeleteFormula = (id: string) => {
		if (window.confirm('Are you sure you want to delete this formula?')) {
			deleteFormula(id);
			if (selectedFormulaId === id) {
				setEditingFormula(null);
				setSelectedFormulaId(null);
			}
		}
	};

	const addIngredient = (aromachemicalId: number) => {
		if (!editingFormula) return;

		const existing = editingFormula.ingredients.find(
			(i) => i.aromachemicalId === aromachemicalId
		);
		if (existing) return;

		setEditingFormula({
			...editingFormula,
			ingredients: [
				...editingFormula.ingredients,
				{
					aromachemicalId,
					weight: 1.0,
					notes: '',
				},
			],
		});
	};

	const updateIngredient = (
		index: number,
		updates: Partial<FormulaIngredient>
	) => {
		if (!editingFormula) return;

		const newIngredients = [...editingFormula.ingredients];
		newIngredients[index] = { ...newIngredients[index], ...updates };

		setEditingFormula({
			...editingFormula,
			ingredients: newIngredients,
		});
	};

	const removeIngredient = (index: number) => {
		if (!editingFormula) return;

		setEditingFormula({
			...editingFormula,
			ingredients: editingFormula.ingredients.filter((_, i) => i !== index),
		});
	};

	return (
		<div className="formula-builder">
			<div className="formula-builder__sidebar">
				<div className="formula-builder__sidebar-header">
					<h2>My Formulas</h2>
					<button
						className="formula-builder__new-button"
						onClick={startNewFormula}
					>
						+ New Formula
					</button>
				</div>

				<div className="formula-builder__formula-list">
					{formulas.length === 0 ? (
						<p className="formula-builder__empty">
							No formulas yet. Create your first one!
						</p>
					) : (
						formulas.map((formula) => (
							<div
								key={formula.id}
								className={`formula-builder__formula-item ${
									selectedFormulaId === formula.id
										? 'formula-builder__formula-item--active'
										: ''
								}`}
								onClick={() => loadFormula(formula)}
							>
								<div className="formula-builder__formula-item-header">
									<h3>{formula.name}</h3>
									{formula.userRating && formula.userRating > 0 && (
										<AccordRating rating={formula.userRating} readonly />
									)}
								</div>
								<p className="formula-builder__formula-item-weight">
									{formula.totalWeight}g • {formula.ingredients.length}{' '}
									ingredients
								</p>
								{formula.description && (
									<p className="formula-builder__formula-item-description">
										{formula.description}
									</p>
								)}
								<button
									className="formula-builder__delete-button"
									onClick={(e) => {
										e.stopPropagation();
										handleDeleteFormula(formula.id);
									}}
								>
									Delete
								</button>
							</div>
						))
					)}
				</div>
			</div>

			<div className="formula-builder__editor">
				{!editingFormula ? (
					<div className="formula-builder__placeholder">
						<h2>Formula Builder</h2>
						<p>Select a formula or create a new one to get started</p>
					</div>
				) : (
					<>
						<div className="formula-builder__editor-header">
							<input
								type="text"
								className="formula-builder__name-input"
								placeholder="Formula Name"
								value={editingFormula.name}
								onChange={(e) =>
									setEditingFormula({
										...editingFormula,
										name: e.target.value,
									})
								}
							/>
							<div className="formula-builder__rating">
								<label>Your Rating:</label>
								<AccordRating
									rating={editingFormula.userRating}
									onRate={(rating) =>
										setEditingFormula({
											...editingFormula,
											userRating: rating,
										})
									}
								/>
							</div>
						</div>

						<textarea
							className="formula-builder__description-input"
							placeholder="Description (optional)"
							value={editingFormula.description}
							onChange={(e) =>
								setEditingFormula({
									...editingFormula,
									description: e.target.value,
								})
							}
							rows={2}
						/>

						<div className="formula-builder__ingredients-section">
							<h3>Ingredients</h3>
							<IngredientSelector onSelect={addIngredient} />

							{editingFormula.ingredients.length === 0 ? (
								<p className="formula-builder__no-ingredients">
									Add ingredients to start building your formula
								</p>
							) : (
								<div className="formula-builder__ingredients-list">
									{editingFormula.ingredients.map((ingredient, index) => (
										<IngredientRow
											key={index}
											ingredient={ingredient}
											onUpdate={(updates) => updateIngredient(index, updates)}
											onRemove={() => removeIngredient(index)}
											onAromachemicalClick={onAromachemicalClick}
										/>
									))}
								</div>
							)}
						</div>

						{editingFormula.ingredients.length > 0 && (
							<FormulaCalculator ingredients={editingFormula.ingredients} />
						)}

						<div className="formula-builder__notes-section">
							<h3>Formula Notes</h3>
							<textarea
								className="formula-builder__notes-input"
								placeholder="Add notes about this formula..."
								value={editingFormula.userNotes}
								onChange={(e) =>
									setEditingFormula({
										...editingFormula,
										userNotes: e.target.value,
									})
								}
								rows={4}
							/>
						</div>

						<div className="formula-builder__actions">
							<button
								className="formula-builder__save-button"
								onClick={saveFormula}
								disabled={!editingFormula.name.trim()}
							>
								{selectedFormulaId ? 'Update Formula' : 'Save Formula'}
							</button>
							<button
								className="formula-builder__cancel-button"
								onClick={() => {
									setEditingFormula(null);
									setSelectedFormulaId(null);
								}}
							>
								Cancel
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
}
