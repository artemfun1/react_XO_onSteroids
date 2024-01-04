import { clsx } from 'clsx';
import { GameSymbol } from './game-symbol';

export function GameCell({ symbol, isWinner, onClick }) {
	return (
		<button
			className={clsx(
				'border border-gray-400 -ml-px -mt-px flex item-center justify-center  ',
				isWinner && 'bg-red-400'
			)}
			onClick={onClick}
		>
			{symbol ? <GameSymbol symbol={symbol} /> : null}
		</button>
	);
}
