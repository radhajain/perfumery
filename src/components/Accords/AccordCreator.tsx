import React, { useState } from 'react';
import { aromachemicals, families } from '../../data/perfumery-constants';
import { AccordIngredient } from '../../types/userdata';
import './AccordCreator.css';

interface AccordCreatorProps {
	onClose: () => void;
	onSave: (accord: {
		name: string;
		description: string;
		category?: string;
		aromachemicals: AccordIngredient[];
	}) => void;
}

export function AccordCreator({ onClose, onSave }: AccordCreatorProps) {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
	const [ingredients, setIngredients] = useState<AccordIngredient[]>([]);
	const [selectedAromachemicalId, setSelectedAromachemicalId] = useState<
		number | null
	>(null);
	const [percentage, setPercentage] = useState('');

	const handleAddIngredient = () => {
		if (selectedAromachemicalId !== null && percentage) {
			const newIngredient: AccordIngredient = {
				aromachemicalId: selectedAromachemicalId,
				percentage: parseFloat(percentage),
			};
			setIngredients([...ingredients, newIngredient]);
			setSelectedAromachemicalId(null);
			setPercentage('');
		}
	};

	const handleRemoveIngredient = (aromachemicalId: number) => {
		setIngredients(
			ingredients.filter((ing) => ing.aromachemicalId !== aromachemicalId)
		);
	};

	const handleSave = () => {
		if (name && description && ingredients.length > 0) {
			onSave({
				name,
				description,
				category: category || undefined,
				aromachemicals: ingredients,
			});
		}
	};

	const totalPercentage = ingredients.reduce(
		(sum, ing) => sum + ing.percentage,
		0
	);

	const isValid =
		name.trim() &&
		description.trim() &&
		ingredients.length > 0 &&
		Math.abs(totalPercentage - 100) < 0.01;

	return (
		<div className="accord-creator-overlay" onClick={onClose}>
			<div className="accord-creator" onClick={(e) => e.stopPropagation()}>
				<div className="accord-creator__header">
					<h2 className="accord-creator__title">Create New Accord</h2>
					<button
						className="accord-creator__close"
						onClick={onClose}
						aria-label="Close"
					>
						×
					</button>
				</div>

				<div className="accord-creator__content">
					<div className="accord-creator__field">
						<label className="accord-creator__label">Name *</label>
						<input
							type="text"
							className="accord-creator__input"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="e.g., Fresh Citrus"
						/>
					</div>

					<div className="accord-creator__field">
						<label className="accord-creator__label">Category</label>
						<input
							type="text"
							className="accord-creator__input"
							value={category}
							onChange={(e) => setCategory(e.target.value)}
							placeholder="e.g., Fresh, Floral, Oriental (optional)"
						/>
					</div>

					<div className="accord-creator__field">
						<label className="accord-creator__label">Description *</label>
						<textarea
							className="accord-creator__textarea"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							placeholder="Describe this accord..."
							rows={3}
						/>
					</div>

					<div className="accord-creator__section">
						<h3 className="accord-creator__section-title">
							Ingredients * (must total 100%)
						</h3>

						<div className="accord-creator__add-ingredient">
							<select
								className="accord-creator__select"
								value={selectedAromachemicalId || ''}
								onChange={(e) =>
									setSelectedAromachemicalId(
										e.target.value ? parseInt(e.target.value) : null
									)
								}
							>
								<option value="">Select aromachemical...</option>
								{aromachemicals
									.filter(
										(a) =>
											!ingredients.find((ing) => ing.aromachemicalId === a.id)
									)
									.map((aroma) => (
										<option key={aroma.id} value={aroma.id}>
											{aroma.name} ({aroma.family}, {aroma.note})
										</option>
									))}
							</select>

							<input
								type="number"
								className="accord-creator__percentage-input"
								value={percentage}
								onChange={(e) => setPercentage(e.target.value)}
								placeholder="%"
								min="0"
								max="100"
								step="0.1"
							/>

							<button
								className="accord-creator__add-button"
								onClick={handleAddIngredient}
								disabled={!selectedAromachemicalId || !percentage}
							>
								Add
							</button>
						</div>

						{ingredients.length > 0 && (
							<div className="accord-creator__ingredients-list">
								{ingredients
									.sort((a, b) => b.percentage - a.percentage)
									.map((ingredient) => {
										const aroma = aromachemicals.find(
											(a) => a.id === ingredient.aromachemicalId
										);
										if (!aroma) return null;

										return (
											<div
												key={ingredient.aromachemicalId}
												className="accord-creator__ingredient"
											>
												<span
													className="accord-creator__ingredient-badge"
													style={{
														backgroundColor: families[aroma.family],
													}}
												>
													{aroma.name}
												</span>
												<span className="accord-creator__ingredient-percentage">
													{ingredient.percentage}%
												</span>
												<button
													className="accord-creator__remove-button"
													onClick={() =>
														handleRemoveIngredient(ingredient.aromachemicalId)
													}
													aria-label="Remove ingredient"
												>
													×
												</button>
											</div>
										);
									})}
							</div>
						)}

						<div className="accord-creator__total">
							Total:{' '}
							<span
								className={
									Math.abs(totalPercentage - 100) < 0.01
										? 'accord-creator__total--valid'
										: 'accord-creator__total--invalid'
								}
							>
								{totalPercentage.toFixed(1)}%
							</span>
						</div>
					</div>
				</div>

				<div className="accord-creator__actions">
					<button className="accord-creator__cancel" onClick={onClose}>
						Cancel
					</button>
					<button
						className="accord-creator__save"
						onClick={handleSave}
						disabled={!isValid}
					>
						Create Accord
					</button>
				</div>
			</div>
		</div>
	);
}
