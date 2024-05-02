import { connect } from 'react-redux';
import { Component } from 'react';

export class InformatinContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="information-div">
				<span className="information-span">
					{this.props.isGameEnded
						? `Победа: ${this.props.currentPlayer === 'X' ? 'O' : 'X'}`
						: this.props.isDraw
							? 'Ничья'
							: `Ходит: ${this.props.currentPlayer}`}
				</span>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	currentPlayer: state.currentPlayer,
	isDraw: state.isDraw,
	isGameEnded: state.isGameEnded,
});

export const Informatin = connect(mapStateToProps)(InformatinContainer);
