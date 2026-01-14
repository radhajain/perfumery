import React, { useState, useEffect } from 'react';
import { useUserData } from '../../contexts/UserDataContext';
import './NoteEditor.css';

interface NoteEditorProps {
	aromachemicalId: number;
}

export function NoteEditor({ aromachemicalId }: NoteEditorProps) {
	const { notes, addNote, updateNote } = useUserData();
	const existingNote = notes[aromachemicalId];

	const [content, setContent] = useState(existingNote?.content || '');
	const [isEditing, setIsEditing] = useState(false);

	useEffect(() => {
		setContent(existingNote?.content || '');
	}, [existingNote]);

	const handleSave = () => {
		if (content.trim()) {
			if (existingNote) {
				updateNote(aromachemicalId, content);
			} else {
				addNote(aromachemicalId, content);
			}
			setIsEditing(false);
		}
	};

	const handleCancel = () => {
		setContent(existingNote?.content || '');
		setIsEditing(false);
	};

	if (!isEditing && !existingNote) {
		return (
			<button
				className="note-editor__add-button"
				onClick={() => setIsEditing(true)}
			>
				+ Add Personal Note
			</button>
		);
	}

	if (!isEditing && existingNote) {
		return (
			<div className="note-editor__display">
				<div className="note-editor__content">{existingNote.content}</div>
				<button
					className="note-editor__edit-button"
					onClick={() => setIsEditing(true)}
				>
					Edit
				</button>
			</div>
		);
	}

	return (
		<div className="note-editor">
			<textarea
				className="note-editor__textarea"
				value={content}
				onChange={(e) => setContent(e.target.value)}
				placeholder="Add your personal notes about this aromachemical..."
				rows={4}
				autoFocus
			/>
			<div className="note-editor__actions">
				<button className="note-editor__save-button" onClick={handleSave}>
					Save
				</button>
				<button className="note-editor__cancel-button" onClick={handleCancel}>
					Cancel
				</button>
			</div>
		</div>
	);
}
