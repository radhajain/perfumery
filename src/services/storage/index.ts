import { StorageAdapter } from './StorageAdapter';
import { LocalStorageAdapter } from './LocalStorageAdapter';

/**
 * Factory function to create storage adapter
 * Currently returns LocalStorageAdapter
 * Can be extended to return APIStorageAdapter based on environment
 */
export function createStorageAdapter(): StorageAdapter {
	// Future: check environment variable for API mode
	// const USE_API = process.env.REACT_APP_USE_API === 'true';
	// return USE_API ? new APIStorageAdapter() : new LocalStorageAdapter();

	return new LocalStorageAdapter();
}

export type { StorageAdapter } from './StorageAdapter';
