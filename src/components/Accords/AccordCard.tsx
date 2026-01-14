import React, { useState } from 'react';
import { Accord } from '../../types/userdata';
import { aromachemicals, families } from '../../data/perfumery-constants';
import { AccordRating } from './AccordRating';
import { useUserData } from '../../contexts/UserDataContext';
import './AccordCard.css';

interface AccordCardProps {
	accord: Accord;
	onEdit?: () => void;
	onDelete?: () => void;
}

export function AccordCard({ accord, onEdit, onDelete }: AccordCardProps) {
	const { rateAccord, getAccordRating } = useUserData();
	const [showNotes, setShowNotes] = useState(false);
	const [userNotes, setUserNotes] = useState(
		getAccordRating(accord.id)?.notes || ''
	);

	const userRating = getAccordRating(accord.id);

	const handleRate = (rating: number) => {
		rateAccord(accord.id, rating, userNotes);
	};

	const handleSaveNotes = () => {
		rateAccord(accord.id, userRating?.rating || 0, userNotes);
		setShowNotes(false);
	};

	return (
		<div className="accord-card">
			<div className="accord-card__header">
				<div>
					<h3 className="accord-card__title">{accord.name}</h3>
					{accord.category && (
						<span className="accord-card__category">{accord.category}</span>
					)}
				</div>
				{accord.isPreDefined && (
					<AccordRating
						rating={userRating?.rating}
						onRate={handleRate}
					/>
				)}
			</div>

			<p className="accord-card__description">{accord.description}</p>

			<div className="accord-card__ingredients">
				<h4 className="accord-card__ingredients-title">Ingredients:</h4>
				<ul className="accord-card__ingredients-list">
					{accord.aromachemicals.map((ingredient) => {
						const aroma = aromachemicals.find(
							(a) => a.id === ingredient.aromachemicalId
						);
						if (!aroma) return null;

						return (
							<li
								key={ingredient.aromachemicalId}
								className="accord-card__ingredient"
							>
								<span
									className="accord-card__ingredient-badge"
									style={{
										backgroundColor: families[aroma.family],
									}}
								>
									{aroma.name}
								</span>
								{ingredient.percentage && (
									<span className="accord-card__ingredient-percentage">
										{ingredient.percentage}%
									</span>
								)}
								{ingredient.notes && (
									<span className="accord-card__ingredient-notes">
										{ingredient.notes}
									</span>
								)}
							</li>
						);
					})}
				</ul>
			</div>

			{accord.isPreDefined && (
				<div className="accord-card__notes">
					{!showNotes && (
						<button
							className="accord-card__notes-button"
							onClick={() => setShowNotes(true)}
						>
							{userNotes ? 'Edit My Notes' : '+ Add My Notes'}
						</button>
					)}
					{showNotes && (
						<div className="accord-card__notes-editor">
							<textarea
								className="accord-card__notes-textarea"
								value={userNotes}
								onChange={(e) => setUserNotes(e.target.value)}
								placeholder="Add your personal notes about this accord..."
								rows={3}
							/>
							<div className="accord-card__notes-actions">
								<button
									className="accord-card__notes-save"
									onClick={handleSaveNotes}
								>
									Save
								</button>
								<button
									className="accord-card__notes-cancel"
									onClick={() => {
										setUserNotes(userRating?.notes || '');
										setShowNotes(false);
									}}
								>
									Cancel
								</button>
							</div>
						</div>
					)}
					{userNotes && !showNotes && (
						<div className="accord-card__notes-display">{userNotes}</div>
					)}
				</div>
			)}

			{!accord.isPreDefined && (
				<div className="accord-card__actions">
					{onEdit && (
						<button className="accord-card__edit" onClick={onEdit}>
							Edit
						</button>
					)}
					{onDelete && (
						<button className="accord-card__delete" onClick={onDelete}>
							Delete
						</button>
					)}
				</div>
			)}
		</div>
	);
}
