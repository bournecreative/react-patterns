import React, { useEffect, useState, useRef } from 'react';
import { Transition } from 'react-transition-group'
import { BackButton } from '../BackButton/index'
import '../styles.css';

export const ReactFade = () => {

	const [fade, setFade] = useState(true)

	const nodeRef = useRef(null)

	const defaultStyles = {
		transition: 'opacity 300ms ease-in-out',
		opacity: 0,
		color: '#fff'
	}

	const transitionStyles = {
		entering: {opacity: 0},
		entered: {opacity: 1},
		exiting: {opacity: 1},
		exited: {opacity: 0}
	}

	const onClick = () => {
		setFade(!fade)
	}

	return (
		<>
			<BackButton/>
			<div>
				<h1>Fade In and Fade Out every 2 seconds</h1>
				<button onClick={()=>onClick()}>Fade Button</button>
				<Transition in={fade} timeout={500}>
					{(status) => (
					<p className={['p-text']} ref={nodeRef} style={{...defaultStyles, ...transitionStyles[status]}}>Text is being faded in using <a href="http://reactcommunity.org/react-transition-group/">React Transition</a></p>
					)}
				</Transition>
			</div>
		</>
	)
}