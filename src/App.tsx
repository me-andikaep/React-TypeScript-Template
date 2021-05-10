import React from 'react'
import { ClickCounter } from './ClickCounter'
import './styles.css'

export const App = () => {
    // const num = 0
    return (
        <>
            <h1>
                React TypeScript Webpack Starter Templates -{' '}
                {process.env.NODE_ENV} - {process.env.name}
            </h1>

            <ClickCounter />
        </>
    )
}
