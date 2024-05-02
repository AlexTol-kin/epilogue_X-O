import { store } from '../store';

export const checkConditions = (array, WIN_PATTERNS, isGameEnded, currentPlayer) => {
	for (const index of WIN_PATTERNS) {
		if (
			index.every((value) => array[value] === 'X') ||
			(index.every((value) => array[value] === 'O') &&
				array.some((id) => id === ''))
		) {
			store.dispatch({ type: 'NEXT PLAYER', payload: currentPlayer });
			return store.dispatch({ type: 'GAME END', payload: true });
		}
	}
	if (array.every((id) => id !== '' && !isGameEnded)) {
		return store.dispatch({ type: 'IS DRAW', payload: true });
	}
};
