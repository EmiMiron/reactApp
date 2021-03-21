import React from 'react';
import SectionInfo from './SectionInfo';
import "./info.css";
import reactLogo from "../../assests/reactLogo.jpg"
import env from "../../assests/env.png"

const postsReact = [
    {
        "src": reactLogo,
        "text": `React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

        Declarative views make your code more predictable and easier to debug.`,
        "label": 'Info React',
        "path": '/posts',
    },
    {
        "src": reactLogo,
        "text": 'React – A JavaScript library',
        "label": 'Info Library',
        "path": '/posts',
    }

];
const postsEnviroment = [
    {
        "src": env,
        "text": `Adding Custom Environment Variables
        Your project can consume variables declared in your environment as if they were declared locally in your JS files. By default you will have NODE_ENV defined for you, and any other environment variables starting with REACT_APP_`,
        "label": 'Info .env',
        "path": '/posts',
    },
    {
        "src": env,
        "text": 'Note: this feature is available with react-scripts@0.2.3 and higher.',
        "label": 'Info',
        "path": '/posts',
    }

]
function Info() {
    return (
        <React.Fragment>

            <div style={{ display: 'flex', background: 'white', width: '100%' }}>


                <div className="sections">
                    <h1> Check this  posts about React</h1>
                    <div className="sections_container">
                        <div className="sections_wrapper">
                            {postsReact.map((item, index) =>
                                <ul className="sections_items" key={index}>
                                    <SectionInfo src={item.src} text={item.text} label={item.label} path={item.path} />
                                </ul>
                            )}

                        </div>

                    </div>

                </div>
                <div className="sections">
                    <h1> Check this posts about .env</h1>
                    <div className="sections_container">
                        <div className="sections_wrapper">
                            {postsEnviroment.map((item, index) =>
                                <ul className="sections_items" key={index}>
                                    <SectionInfo src={item.src} text={item.text} label={item.label} path={item.path} />
                                </ul>
                            )}

                        </div>

                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Info
