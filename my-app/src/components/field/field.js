import { Component } from 'react';
import { connect } from 'react-redux';
import { WIN_PATTERNS } from '../../constant';
import { checkConditions, nextPlayer } from '../../utils';

export class FieldContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	onClick = ({ target }) => {
		if (!this.props.isGameEnded && !this.props.isDraw && target.textContent === '') {
			const newField = this.props.field.map((id, index) => {
				if (index === Number(target.id) && id === '') {
					return (id = this.props.currentPlayer);
				} else {
					return id;
				}
			});

			this.props.dispatch({ type: 'PLAYING FIELD', payload: newField });

			checkConditions(
				newField,
				WIN_PATTERNS,
				this.props.isGameEnded,
				this.props.currentPlayer,
			);
			nextPlayer(this.props.currentPlayer, this.props.isGameEnded);
		}
	};

	render() {
		return (
			<div className="game-app">
				{this.props.field.map((id, index) => (
					<div
						id={index}
						className="game-field"
						onClick={this.onClick}
						key={index}
					>
						{id}
					</div>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	currentPlayer: state.currentPlayer,
	isDraw: state.isDraw,
	isGameEnded: state.isGameEnded,
	field: state.field,
});

export const Field = connect(mapStateToProps)(FieldContainer);
