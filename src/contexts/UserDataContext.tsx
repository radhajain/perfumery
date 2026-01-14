import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	useCallback,
	ReactNode,
} from 'react';
import {
	UserData,
	DEFAULT_USER_DATA,
	Accord,
	AccordRating,
	Formula,
} from '../types/userdata';
import { createStorageAdapter, StorageAdapter } from '../services/storage';

interface UserDataContextType {
	// Notes
	notes: UserData['notes'];
	addNote: (aromachemicalId: number, content: string) => void;
	updateNote: (aromachemicalId: number, content: string) => void;
	deleteNote: (aromachemicalId: number) => void;

	// Accords
	customAccords: Accord[];
	addAccord: (accord: Omit<Accord, 'id' | 'createdAt' | 'updatedAt'>) => void;
	updateAccord: (id: string, accord: Partial<Accord>) => void;
	deleteAccord: (id: string) => void;
	rateAccord: (accordId: string, rating: number, notes?: string) => void;
	getAccordRating: (accordId: string) => AccordRating | undefined;

	// Formulas
	formulas: Formula[];
	addFormula: (
		formula: Omit<Formula, 'id' | 'createdAt' | 'updatedAt'>
	) => void;
	updateFormula: (id: string, formula: Partial<Formula>) => void;
	deleteFormula: (id: string) => void;

	// State
	isLoading: boolean;

	// Export/Import
	exportData: () => string;
	importData: (jsonData: string) => void;
	clearAllData: () => void;
}

const UserDataContext = createContext<UserDataContextType | undefined>(
	undefined
);

// Debounce helper
function useDebounce<T>(value: T, delay: number): T {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debouncedValue;
}

// Generate UUID
function generateId(): string {
	return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export function UserDataProvider({ children }: { children: ReactNode }) {
	const [userData, setUserData] = useState<UserData>(DEFAULT_USER_DATA);
	const [isLoading, setIsLoading] = useState(true);
	const [storage] = useState<StorageAdapter>(() => createStorageAdapter());

	// Debounce userData to avoid excessive localStorage writes
	const debouncedUserData = useDebounce(userData, 300);

	// Load data on mount
	useEffect(() => {
		async function loadData() {
			try {
				const data = await storage.getUserData();
				if (data) {
					setUserData(data);
				}
			} catch (error) {
				console.error('Failed to load user data:', error);
			} finally {
				setIsLoading(false);
			}
		}
		loadData();
	}, [storage]);

	// Save data when it changes (debounced)
	useEffect(() => {
		if (!isLoading) {
			storage.saveUserData(debouncedUserData).catch((error) => {
				console.error('Failed to save user data:', error);
			});
		}
	}, [debouncedUserData, isLoading, storage]);

	// Notes operations
	const addNote = useCallback((aromachemicalId: number, content: string) => {
		const now = new Date().toISOString();
		setUserData((prev) => ({
			...prev,
			notes: {
				...prev.notes,
				[aromachemicalId]: {
					aromachemicalId,
					content,
					createdAt: now,
					updatedAt: now,
				},
			},
		}));
	}, []);

	const updateNote = useCallback(
		(aromachemicalId: number, content: string) => {
			setUserData((prev) => {
				const existingNote = prev.notes[aromachemicalId];
				if (!existingNote) return prev;

				return {
					...prev,
					notes: {
						...prev.notes,
						[aromachemicalId]: {
							...existingNote,
							content,
							updatedAt: new Date().toISOString(),
						},
					},
				};
			});
		},
		[]
	);

	const deleteNote = useCallback((aromachemicalId: number) => {
		setUserData((prev) => {
			const { [aromachemicalId]: _, ...restNotes } = prev.notes;
			return {
				...prev,
				notes: restNotes,
			};
		});
	}, []);

	// Accords operations
	const addAccord = useCallback(
		(accord: Omit<Accord, 'id' | 'createdAt' | 'updatedAt'>) => {
			const now = new Date().toISOString();
			const newAccord: Accord = {
				...accord,
				id: generateId(),
				createdAt: now,
				updatedAt: now,
			};
			setUserData((prev) => ({
				...prev,
				customAccords: [...prev.customAccords, newAccord],
			}));
		},
		[]
	);

	const updateAccord = useCallback(
		(id: string, accordUpdate: Partial<Accord>) => {
			setUserData((prev) => ({
				...prev,
				customAccords: prev.customAccords.map((accord) =>
					accord.id === id
						? {
								...accord,
								...accordUpdate,
								updatedAt: new Date().toISOString(),
						  }
						: accord
				),
			}));
		},
		[]
	);

	const deleteAccord = useCallback((id: string) => {
		setUserData((prev) => ({
			...prev,
			customAccords: prev.customAccords.filter((accord) => accord.id !== id),
		}));
	}, []);

	const rateAccord = useCallback(
		(accordId: string, rating: number, notes?: string) => {
			setUserData((prev) => ({
				...prev,
				accordRatings: {
					...prev.accordRatings,
					[accordId]: { rating, notes },
				},
			}));
		},
		[]
	);

	const getAccordRating = useCallback(
		(accordId: string): AccordRating | undefined => {
			return userData.accordRatings[accordId];
		},
		[userData.accordRatings]
	);

	// Formulas operations
	const addFormula = useCallback(
		(formula: Omit<Formula, 'id' | 'createdAt' | 'updatedAt'>) => {
			const now = new Date().toISOString();
			const newFormula: Formula = {
				...formula,
				id: generateId(),
				createdAt: now,
				updatedAt: now,
			};
			setUserData((prev) => ({
				...prev,
				formulas: [...prev.formulas, newFormula],
			}));
		},
		[]
	);

	const updateFormula = useCallback(
		(id: string, formulaUpdate: Partial<Formula>) => {
			setUserData((prev) => ({
				...prev,
				formulas: prev.formulas.map((formula) =>
					formula.id === id
						? {
								...formula,
								...formulaUpdate,
								updatedAt: new Date().toISOString(),
						  }
						: formula
				),
			}));
		},
		[]
	);

	const deleteFormula = useCallback((id: string) => {
		setUserData((prev) => ({
			...prev,
			formulas: prev.formulas.filter((formula) => formula.id !== id),
		}));
	}, []);

	// Export/Import operations
	const exportData = useCallback(() => {
		return JSON.stringify(userData, null, 2);
	}, [userData]);

	const importData = useCallback((jsonData: string) => {
		try {
			const imported = JSON.parse(jsonData) as UserData;
			setUserData(imported);
		} catch (error) {
			console.error('Failed to import data:', error);
			throw new Error('Invalid JSON data');
		}
	}, []);

	const clearAllData = useCallback(async () => {
		setUserData(DEFAULT_USER_DATA);
		await storage.clear();
	}, [storage]);

	const value: UserDataContextType = {
		notes: userData.notes,
		addNote,
		updateNote,
		deleteNote,

		customAccords: userData.customAccords,
		addAccord,
		updateAccord,
		deleteAccord,
		rateAccord,
		getAccordRating,

		formulas: userData.formulas,
		addFormula,
		updateFormula,
		deleteFormula,

		isLoading,

		exportData,
		importData,
		clearAllData,
	};

	return (
		<UserDataContext.Provider value={value}>
			{children}
		</UserDataContext.Provider>
	);
}

export function useUserData() {
	const context = useContext(UserDataContext);
	if (context === undefined) {
		throw new Error('useUserData must be used within a UserDataProvider');
	}
	return context;
}
