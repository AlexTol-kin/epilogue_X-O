import { EMPTY_FIELD, PLAYER } from './constant';

export const initialState = {
	field: EMPTY_FIELD,
	currentPlayer: PLAYER.CROSS,
	isGameEnded: false,
	isDraw: false,
};

export const appReduser = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'PLAYING FIELD': {
			return {
				...state,
				field: payload,
			};
		}
		case 'NEXT PLAYER': {
			return {
				...state,
				currentPlayer: payload,
			};
		}

		case 'GAME END': {
			return {
				...state,
				isGameEnded: payload,
			};
		}

		case 'IS DRAW': {
			return {
				...state,
				isDraw: payload,
			};
		}

		default:
			return state;
	}
};
