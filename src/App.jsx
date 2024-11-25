import React from 'react';
import { ReactComponent as Logo } from './Assets/Logo.svg';
import { Styles } from 'notion-components-react'
import './App.css'
import Home from './Views/Home/Home.jsx'

const App = () => {
    const Header = () => {
        return(
            <>
                <div className="header-main">
                    <Logo className="header-logo" />
                    <h3 className="header-title">
                        Notion Components
                    </h3>
                </div>
            </>
        )
    }
    return(
        <>
        <Header />
        <div
        // To act as a spacer for the header
            style={{
                paddingTop: '6rem'
            }}
        >
            <Home />
        </div>
        </>
    )
}
export default App