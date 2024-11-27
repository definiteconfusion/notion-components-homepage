import React, { useState, useEffect } from 'react';
import { ReactComponent as Logo } from './Assets/Logo.svg';
import { Styles, Hstack, Button } from 'notion-components-react'
import './App.css'
import Home from './Views/Home/Home.jsx'
import Docs from './Views/Docs/Docs.jsx'
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
    const Header = (currTab) => {
        return(
            <>
                <div className="header-main">
                    <Logo className="header-logo" />
                    <h3 className="header-title">
                        Notion Components
                    </h3>
                    <Hstack
                        control="start"
                        style={{
                            marginLeft: '2rem'
                        }}
                    >
                        <Button
                            mode="light"
                            onClick={() => setCurrTab("home")}
                        >
                            Home
                        </Button>
                        <Button
                            mode="light"
                            onClick={() => setCurrTab("docs")}
                        >
                            Docs
                        </Button>
                        <Button
                            mode="light"
                            onClick={() => window.open("https://github.com/definiteconfusion/notion-components/tree/main/src/notion-components")}
                        >
                            Source
                        </Button>
                    </Hstack>
                </div>
            </>
        )
    }
    const [currTab, setCurrTab] = useState(() => {
        // Initialize state from localStorage or default to 'home'
        return localStorage.getItem('currentTab') || 'home';
      });
    
      useEffect(() => {
        // Sync the state to localStorage whenever it changes
        localStorage.setItem('currentTab', currTab);
      }, [currTab]);
    let tabsCache = {
        "home":<Home
            setCurrTab={setCurrTab}
        />,
        "docs":<Docs />,
    }
    const variants = {
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 }
    };
    return(
        <>
        <Header
            currTab={currTab}
        />
        <div
        // To act as a spacer for the header
            style={{
                paddingTop: '6rem'
            }}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={currTab}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                >
                    {tabsCache[currTab]}
                </motion.div>
            </AnimatePresence>
        </div>
        </>
    )
}
export default App