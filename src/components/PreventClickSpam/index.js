import React, { useState, useEffect, useRef } from 'react'
import { BackButton } from '../BackButton'
import "./styles.css"

export const PreventClickSpam = () => {

    const [clickCount, setCount] = useState(0)
    const firstRender = useRef(true)
    const target = useRef(null)

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
            <BackButton />
            <div className="content">
                <h1>The end goal - ensure continous clicks do not trigger some function - in our case, it a simple text output. Once once the spammed clicks stop will a message post with the most recent value of state</h1>
                <p>State Count: {clickCount}</p>
                <button onClick={() => handleClick(1)}>+</button>
                <button onClick={() => handleClick(-1)}>-</button>
                <p ref={target} className="output-message"></p>
            </div>
        </div>
    )
}
