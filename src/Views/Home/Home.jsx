import React from 'react';
import { Button, Vstack, Hstack } from 'notion-components-react'
import './Home.css'

const Home = () => {
    return(
        <>
            <div className="home-main">
            <Hstack
                className="test"
            >
                <Vstack
                    control="start"
                    padding="1rem"
                >
                    <Vstack
                        control="start"
                        padding="0.1rem"
                    >
                    <h1 className="home-title">Clean...</h1>
                    <h1 className="home-title">Minimalist</h1>
                    </Vstack>
                    <Hstack>
                        <Button
                            mode="affirmative"
                        >Get Started</Button>
                    </Hstack>
                </Vstack>
            </Hstack>
            </div>
        </>
    )
}

export default Home