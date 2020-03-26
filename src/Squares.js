import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { shuffle } from 'lodash';

const COLORS = [
	'var(--red)',
	'var(--blue)',
	'var(--green)',
	'var(--purp)',
	'var(--black)',
];

export default function Squares() {
	const [colorsList, setColorsList] = useState(COLORS);
	return (
		<>
			<button onClick={() => setColorsList(shuffle(colorsList))}>
				Shuffle
			</button>
			<div style={{ display: 'flex' }}>
				{colorsList.map(color => (
					<motion.div
						key={color}
						positionTransition={{
							damping: 100,
							stiffness: 10,
						}}
						style={{
							background: color,
							height: 100,
							width: 100,
						}}
					></motion.div>
				))}
			</div>
		</>
	);
}
