import { PLAYER } from '../constant';
import { store } from '../store';

export const nextPlayer = (currentPlayer, isGameEnded) => {
	if (currentPlayer === PLAYER.CROSS && !isGameEnded) {
		return store.dispatch({ type: 'NEXT PLAYER', payload: PLAYER.NOUGHT });
	} else if (!isGameEnded) {
		return store.dispatch({ type: 'NEXT PLAYER', payload: PLAYER.CROSS });
	}
};
