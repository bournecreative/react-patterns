import React, { useState, useEffect, useRef } from 'react'
import "./styles.css"

export const Counter = (props) => {

	const [clickCount, setCount] = useState(props.count)
	const firstRender = useRef(true)
	const target = useRef(null)

	useEffect(() => {
		if (props.count === null) return
		setCount(props.count)
	}, [props.count])

	const handleClick = (arg) => {
		if (clickCount === 0 && arg === -1) return
		setCount(() => {
			return clickCount + arg
		})
	}

	useEffect(() => {

		if (firstRender.current) {
			firstRender.current = false
			return
		}

		const timer = setTimeout(() => {
			target.current.textContent = `State once button spamming ends. Send value to database ${clickCount} `
		}, 3000)

		return () => clearTimeout(timer)

	}, [clickCount])

	return (
		<div className="App">

			<div className="content">
				<h1>SetState is initalized with props. Props is passed in from async/await function</h1>
				<p>Props passed into State: {clickCount}</p>
				<button onClick={() => handleClick(1)}>+</button>
				<button onClick={() => handleClick(-1)}>-</button>
				<p ref={target} className="output-message"></p>
			</div>
		</div>
	)
}
