import { useState } from 'react';
import { SYMBOL_O, SYMBOL_X } from './constants';

const computeWinner = cells => {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
			return [a, b, c];
		}
	}
};

export function useGameState() {
	const [cells, setCells] = useState([
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
	]);
	const [currentStep, setCurrentStep] = useState(SYMBOL_O);
	const [winnerSequence, setWinnerSequence] = useState(undefined);
	const [draw, setDraw] = useState(false);

	const handleCellClick = index => {
		if (cells[index] || winnerSequence) return;

		const cellsCopy = cells.slice();
		cellsCopy[index] = currentStep;
		const winner = computeWinner(cellsCopy);

		setCells(cellsCopy);
		setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);
		setWinnerSequence(winner);

		if (!cellsCopy.some(el => el === null)) {
			setDraw(prev => !prev);
		}
	};

	function resetGame() {
		setCells(Array.from({ length: 9 }, () => null));
		setCurrentStep(SYMBOL_O);
		setWinnerSequence(undefined);
		setDraw(draw && false);
	}

	const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined;

	return {
		draw,
		cells,
		currentStep,
		winnerSequence,
		winnerSymbol,
		handleCellClick,
		resetGame,
	};
}