import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Card, CardGrid, Container, Header } from './Elements';
import Modal from './Modal';
import Accordian from './Accordian';
import Nav from './Nav';
import './App.css';
import Menu from './Menu';
import blue from './blue.png';
import purp from './purp.png';
import black from './black.png';
import green from './green.png';

function App() {
	const [value, setValue] = useState(0);
	const [isToggled, setToggled] = useState(false);
	const [isNavOpen, setIsNavOpen] = useState(false);
	const x = useMotionValue(0);
	const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);
	console.log(x);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<Header>
				<Menu onClick={() => setIsNavOpen(true)} />
				<Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
				<h1>Animating React with Framer Motion</h1>
			</Header>
			<Container>
				{/* the slider returns a string useDebugValue(
          because of this we cannot simply set the animation x value = value
          we have to either parseInt() the value or append a "px" to the end of the value
          we can also add or mutliply the value inside the animation by saing value * n
        ) */}
				<h2>Super Cool</h2>
				<input
					type="range"
					min="-100"
					max="100"
					value={value}
					onChange={e => {
						setValue(e.target.value);
					}}
				/>
				{/* when we click the button we want the "Super Cool" header to toggle
        we will then pass this value into a state function 
        */}
				<button onClick={prevValue => setToggled(true)}>Modal</button>

				<Modal isToggled={isToggled} setToggled={setToggled}>
					<Card style={{ background: 'var(--purp)' }}>
						<h3>Some card</h3>
						<img src={purp} />
					</Card>
				</Modal>
				<Accordian />
				<CardGrid>
					<Card
						drag
						dragConstraints={{
							top: -100,
							left: -100,
							bottom: 100,
							right: 100,
						}}
						style={{ background: 'var(--purp)' }}
					>
						<h3>Some card</h3>
						<img src={purp} />
					</Card>
					<Card
						drag="x"
						dragConstraints={{ left: 0, right: 0 }}
						style={{
							x,
							opacity,
							background: 'var(--blue)',
						}}
					>
						<h3>Some card</h3>
						<img src={blue} />
					</Card>
					<Card style={{ background: 'var(--black)' }}>
						<h3>Some card</h3>
						<img src={black} />
					</Card>
					<Card style={{ background: 'var(--green)' }}>
						<h3>Some card</h3>
						<img src={green} />
					</Card>
				</CardGrid>
			</Container>
		</motion.div>
	);
}

export default App;
