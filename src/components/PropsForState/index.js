import React, { useState, useEffect } from 'react'
import { Counter } from './counter'
import { BackButton } from '../BackButton/index'

export const PropsForState = () => {
	const [count, setCount] = useState(null)

	useEffect(() => {
		const getCount = async () => {
			const response = await fetch('https://jsonplaceholder.typicode.com/todos/5')
				.then(resp => resp.json())
				.then(json => {
					setCount(json.id)
				})
		}
		getCount()
	}, [count])

	return (
		<>
			<BackButton />
			<Counter count={count} />
		</>
	)
}