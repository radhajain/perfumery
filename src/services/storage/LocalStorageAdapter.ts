import { StorageAdapter } from './StorageAdapter';
import { UserData, DEFAULT_USER_DATA } from '../../types/userdata';

/**
 * LocalStorage implementation of StorageAdapter
 * Provides browser-based persistence for user data
 */
export class LocalStorageAdapter implements StorageAdapter {
	private readonly STORAGE_KEY = 'perfumery_user_data';

	async getUserData(): Promise<UserData | null> {
		try {
			const dataStr = localStorage.getItem(this.STORAGE_KEY);
			if (!dataStr) {
				return DEFAULT_USER_DATA;
			}

			const data = JSON.parse(dataStr) as UserData;

			// Validate data structure
			if (!this.isValidUserData(data)) {
				console.warn('Invalid user data structure, resetting to default');
				return DEFAULT_USER_DATA;
			}

			return data;
		} catch (error) {
			console.error('Error loading user data from localStorage:', error);
			return DEFAULT_USER_DATA;
		}
	}

	async saveUserData(data: UserData): Promise<void> {
		try {
			const dataStr = JSON.stringify(data);
			localStorage.setItem(this.STORAGE_KEY, dataStr);
		} catch (error) {
			console.error('Error saving user data to localStorage:', error);
			throw new Error('Failed to save user data');
		}
	}

	async clear(): Promise<void> {
		try {
			localStorage.removeItem(this.STORAGE_KEY);
		} catch (error) {
			console.error('Error clearing user data:', error);
			throw new Error('Failed to clear user data');
		}
	}

	/**
	 * Validates that the loaded data has the expected structure
	 */
	private isValidUserData(data: any): data is UserData {
		return (
			data &&
			typeof data === 'object' &&
			typeof data.notes === 'object' &&
			Array.isArray(data.customAccords) &&
			typeof data.accordRatings === 'object' &&
			Array.isArray(data.formulas) &&
			typeof data.version === 'number'
		);
	}
}
