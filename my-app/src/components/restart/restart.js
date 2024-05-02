import { connect } from 'react-redux';
import { EMPTY_FIELD, PLAYER } from '../../constant';
import { Component } from 'react';

export class RestartContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div>
				<button onClick={this.props.restarClick} className="button-restart">
					Начать заново
				</button>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	restarClick: () => {
		dispatch({ type: 'PLAYING FIELD', payload: EMPTY_FIELD });
		dispatch({ type: 'NEXT PLAYER', payload: PLAYER.CROSS });
		dispatch({ type: 'GAME END', payload: false });
		dispatch({ type: 'IS DRAW', payload: false });
	},
});

export const Restart = connect(null, mapDispatchToProps)(RestartContainer);
