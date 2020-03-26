import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';

const COLORS = [
	'var(--red)',
	'var(--blue)',
	'var(--green)',
	'var(--purp)',
	'var(--black)',
];

const variants = {
	enter: direction => ({
		opacity: 0,
		x: direction < 0 ? -1000 : 1000,
	}),
	center: {
		opacity: 1,
		x: 0,
	},
	exit: direction => ({
		opacity: 0,
		x: direction < 0 ? 1000 : -1000,
	}),
};

export default function Slideshow() {
	// think of the state array as page number and direction
	const [[page, direction], setPage] = useState([0, 0]);
	const paginate = direction => {
		setPage([page + direction, direction]);
	};
	const index = wrap(0, COLORS.length, page);
	return (
		<>
			<div style={{ position: 'relative', height: 350, marginTop: '1rem' }}>
				{/* add the custom prop to the animate presence to keep it from lagging behind */}
				<AnimatePresence custom={direction}>
					<motion.div
						key={page}
						custom={direction}
						drag="x"
						dragConstraints={{ left: 0, right: 0 }}
						dragElastic={1}
						onDragEnd={(e, { offset, velocity }) => {
							if (offset.x > 400) {
								paginate(-1);
							} else if (offset.x < -400) {
								paginate(1);
							}
						}}
						style={{
							height: 300,
							width: '100%',
							backgroundColor: COLORS[index],
							position: 'absolute',
							left: 0,
							top: 0,
							cursor: 'grab',
						}}
						variants={variants}
						initial="enter"
						animate="center"
						exit="exit"
					/>
				</AnimatePresence>
			</div>
			<div style={{ marginBottom: '1rem' }}>
				<button onClick={() => paginate(-1)}>back</button>
				<button onClick={() => paginate(1)}>forward</button>
			</div>
		</>
	);
}
