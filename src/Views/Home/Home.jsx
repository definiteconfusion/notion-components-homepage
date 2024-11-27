import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, androidstudio, xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { WideButton, Button, Vstack, Hstack, Header5, Header2, Code} from 'notion-components-react'
import { ReactComponent as Painting } from '../../Assets/Painting.svg';
import { ReactComponent as Bun } from '../../Assets/Bun.svg';
import { ReactComponent as ReactLogo } from '../../Assets/React.svg';
import './Home.css'
import { TypeAnimation } from 'react-type-animation';

const Home = ({ setCurrTab }) => {
    return(
        <>
            <div className="home-main">
            <Hstack
                control="center"
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
                    <Hstack
                        padding="0.5rem"
                    >
                        <Button
                            mode="affirmative"
                            onClick={() => window.location.href = '#warp'}
                        >Get Started</Button>
                        <Button
                            style={{
                                backgroundColor: "#EBF4FE",
                                color: "#087FE6"
                            }}
                            onClick={() => setCurrTab('docs')}
                        >Read Docs</Button>
                    </Hstack>
                </Vstack>
                <Painting
                    height="70vh"
                />
            </Hstack>
            </div>
            <div id="warp" className="home-content-main">
                <Hstack
                    control="center"
                    padding="1rem"
                >
                    <div className="warp-main">
                        <Vstack
                            style={{
                                height: '100%',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Hstack
                                control="start"
                                padding=".25rem"
                                style={{
                                    marginTop: '1.5rem',
                                    marginLeft: '1.5rem'
                                }}
                            >
                                <div className="mac-controller-red"></div>
                                <div className="mac-controller-yellow"></div>
                                <div className="mac-controller-green"></div>
                                <p style={{margin: '0px', marginLeft: '2rem', color: '#727272'}}>bash</p>
                            </Hstack>
                            <Vstack
                                style={{
                                }}
                                padding="0.5rem"
                            >
                                <div style={{
                                    width: '100%',
                                    height: '0.15rem',
                                    backgroundColor: "#E7E7E7"
                                }}></div>
                                <Header5 style={{fontSize: '1em', fontWeight: '600', marginLeft: '1.5rem'}}>~/</Header5>
                                <TypeAnimation
                                    sequence={[
                                        'bun install notion-components-react',
                                        5000,
                                        "",
                                        200,
                                    ]}
                                    wrapper="span"
                                    speed={25}
                                    deletionSpeed={25}
                                    cursor={true}
                                    repeat={Infinity}
                                    style={{ marginBottom: '1.5rem', marginLeft: '1.5rem', fontSize: '1.5em', fontFamily: 'monospace', display: 'inline-block' }}
                                    />
                            </Vstack>
                        </Vstack>
                    </div>
                    <div className="tile-label">
                        <Vstack
                            control="start"
                            padding="0.25rem"
                        >
                            <Bun
                            style={{
                                width: '5rem'
                            }}
                            />
                            <Header2>Install with Bun...</Header2>
                            <p style={{color: '#636363'}}>The package is available from the NPM registry, on GitHub, or you can transpile from the source (also found within the GitHub repository).</p>
                            <div
                                style={{
                                    width: '25rem'
                                }}
                            >
                                <WideButton
                                    mode="affirmative"
                                    style={{
                                        margin: '0px',
                                    }}
                                    onClick={() => window.location.href = '#xcode'}
                                >
                                Next Step
                                </WideButton>
                            </div>
                        </Vstack>
                    </div>
                </Hstack>
            </div>
            <div id="xcode" className="home-content-main">
                <Hstack
                    control="center"
                    padding="1rem"
                >
                                    <div className="tile-label">
                                        <Vstack
                                            control="end"
                                            padding="0.25rem"
                                        >
                                            <ReactLogo
                                            style={{
                                                width: '5rem'
                                            }}
                                            />
                                            <Header2>Start writing</Header2>
                                            <p style={{color: '#636363', textAlign: 'end'}}>Thats it, now you can start using any component from the library, and, in-so-doing, spreading Notion's style even further</p>
                                            <div
                                                style={{
                                                    width: '25rem'
                                                }}
                                            >
                                                <WideButton
                                                    mode="affirmative"
                                                    style={{
                                                        margin: '0px',
                                                    }}
                                                    onClick={() => setCurrTab("docs")}
                                                >
                                                Read the Docs
                                                </WideButton>
                                            </div>
                                        </Vstack>
                                    </div>
                    <div id="warp" className="warp-main">
                        <Vstack
                            style={{
                                height: '100%',
                                justifyContent: 'start'
                            }}
                        >
                            <Hstack
                                control="start"
                                padding=".25rem"
                                style={{
                                    marginTop: '1.5rem',
                                    marginLeft: '1.5rem'
                                }}
                            >
                                <div className="mac-controller-red"></div>
                                <div className="mac-controller-yellow"></div>
                                <div className="mac-controller-green"></div>
                                <p style={{margin: '0px', marginLeft: '2rem', color: '#727272'}}>Vim  |  App.jsx</p>
                            </Hstack>
                            <Vstack
                                style={{
                                }}
                                padding="0.5rem"
                            >
                                <SyntaxHighlighter language="javascript" style={xcode} className="tile2-code">
                                    {`import { Button, Header1 } from 'notion-components-react';
import React, { useState } from 'react';

function App() {
    const [clicked, setClicked] = useState(0);
    const increm = () => {
        setClicked(clicked + 1);
    };

    return (
        <>
            <h1>Clicked {clicked} times</h1>
            <Button onClick={increm}>Click</Button>
        </>
    );
}
export default App;`}
                                </SyntaxHighlighter>
                            </Vstack>
                        </Vstack>
                    </div>
                </Hstack>
            </div>
        </>
    )
}

export default Home