import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { TabType } from '../components/Layout/TabNavigation';

export function useNavigation() {
	const navigate = useNavigate();

	const navigateToAromachemical = useCallback(
		(id: number) => {
			const params = new URLSearchParams();
			params.set('tab', 'graph');
			params.set('aromachemical', id.toString());
			navigate(`?${params.toString()}`, { replace: true });
		},
		[navigate]
	);

	const navigateToAccord = useCallback(
		(accordId: string) => {
			const params = new URLSearchParams();
			params.set('tab', 'accords');
			params.set('accord', accordId);
			navigate(`?${params.toString()}`, { replace: true });
		},
		[navigate]
	);

	const navigateToTab = useCallback(
		(tab: TabType, aromachemicalId?: number, accordId?: string) => {
			const params = new URLSearchParams();
			params.set('tab', tab);
			if (aromachemicalId) {
				params.set('aromachemical', aromachemicalId.toString());
			}
			if (accordId) {
				params.set('accord', accordId);
			}
			navigate(`?${params.toString()}`, { replace: true });
		},
		[navigate]
	);

	return {
		navigateToAromachemical,
		navigateToAccord,
		navigateToTab,
	};
}
