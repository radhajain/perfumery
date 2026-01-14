import { UserData } from '../../types/userdata';

/**
 * Abstract interface for storage operations
 * Allows switching between localStorage and backend API
 */
export interface StorageAdapter {
	getUserData(): Promise<UserData | null>;
	saveUserData(data: UserData): Promise<void>;
	clear(): Promise<void>;
}
