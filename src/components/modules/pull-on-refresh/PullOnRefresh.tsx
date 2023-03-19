import { useState } from "react";

type Props = {
	onRefresh: () => void;
	children: React.ReactNode;
};

function PullToRefresh({ onRefresh, children }: Props) {
	const [state, setState] = useState<{ dragging: boolean; loading: boolean }>(
		{ dragging: false, loading: false }
	);
	const [startY, setStartY] = useState<number>(0);

	function handleDragStart(event: React.DragEvent<HTMLDivElement>) {
		if (state.loading) {
			return;
		}

		setStartY(event.clientY);
		setState({ dragging: false, loading: false });
	}

	function handleDrag(event: React.DragEvent<HTMLDivElement>) {
		if (state.loading) {
			return;
		}

		const { scrollTop } = document.documentElement;
		const deltaY = event.clientY - startY;

		if (scrollTop === 0 && !state.dragging) {
			setState({ dragging: true, loading: false });
		} else if (scrollTop === 0 && state.dragging) {
			const threshold = 80;

			if (deltaY > threshold) {
				setState({ dragging: false, loading: true });
				onRefresh();
			}
		} else {
			setState({ dragging: false, loading: false });
		}
	}

	function handleDragEnd(event: React.DragEvent<HTMLDivElement>) {
		setState({ dragging: false, loading: false });
	}

	return (
		<div className="relative">
			{state.loading && (
				<div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-center h-16 bg-gray-200">
					<svg
						className="animate-spin h-5 w-5 mr-3 text-gray-600"
						viewBox="0 0 24 24">
						<path
							d="M12 4c-2.2 0-4 1.8-4 4s1.8 4 4 4c1.5 0 2.8-.8 3.5-2 .3-.5.9-.7 1.4-.4.5.3.7.9.4 1.4C16 13.3 14.2 14 12 14c-3.3 0-6-2.7-6-6s2.7-6 6-6v2c0 .6.4 1 1 1s1-.4 1-1V4zm0-4C6.5 0 2 4.5 2 10s4.5 10 10 10 10-4.5 10-10S17.5 0 12 0z"
							fill="currentColor"
						/>
					</svg>
					<span className="text-gray-600">Loading...</span>
				</div>
			)}
			<div
				draggable="true"
				onDragStart={handleDragStart}
				onDrag={handleDrag}
				onDragEnd={handleDragEnd}>
				{children}
			</div>
		</div>
	);
}

export default PullToRefresh;
