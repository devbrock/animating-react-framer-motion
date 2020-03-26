import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
	open: { opacity: 1, height: 'auto' },
	closed: { opacity: 0, height: 0 },
};

export default function Accordian() {
	const [isToggled, setIsToggled] = useState(false);

	return (
		<article>
			<h2 role="button" onClick={() => setIsToggled(prevState => !prevState)}>
				The Heading
			</h2>
			<AnimatePresence>
				{isToggled && (
					<motion.div
						variants={variants}
						style={{ overflow: 'hidden' }}
						initial="closed"
						animate="open"
						exit="closed"
					>
						<p>
							Enim excepteur adipisicing commodo dolore occaecat laborum
							pariatur. Duis deserunt occaecat non quis dolore eiusmod aliqua
							aute mollit esse elit veniam. Labore adipisicing sint ea
							adipisicing et veniam nulla proident aliqua elit sint veniam
							velit.
						</p>
					</motion.div>
				)}
			</AnimatePresence>
		</article>
	);
}
