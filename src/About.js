import React from 'react';
import Squares from './Squares';
import { motion } from 'framer-motion';

const variants = {
	initial: { opacity: 0, y: -100 },
	animate: { opacity: 1, y: 0 },
	exit: {
		opacity: 0,
		y: 100,
	},
};

const hVariants = {
	initial: { opacity: 0, y: -100 },
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.3,
		},
	},
	exit: { opacity: 0, y: -100 },
};

export default function About() {
	return (
		<motion.div
			variants={variants}
			initial="initial"
			animate="animate"
			exit="exit"
		>
			<motion.h1
				variants={hVariants}
				initial="initial"
				animate="animate"
				exit="exit"
			>
				About Page
			</motion.h1>
			<Squares />
		</motion.div>
	);
}
