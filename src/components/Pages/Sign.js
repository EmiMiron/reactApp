import React from "react"
import "../../components/login/login.scss"
import Login from "../../components/login/Login"
import Register from "../../components/login/Register"

export default class Sign extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoginActive: true
        }
    }
    componentDidMount() {
        this.RightSideScreen.classList.add("rightSide");
    }
    changeSide() {
        const { isLoginActive } = this.state;
        if (isLoginActive) {
            this.RightSideScreen.classList.remove("rightSide");
            this.RightSideScreen.classList.add("leftSide");
        } else {
            this.RightSideScreen.classList.remove("leftSide");
            this.RightSideScreen.classList.add("rightSide");
        }

        this.setState((prevState) => ({
            isLoginActive: !prevState.isLoginActive
        }))
    }
    render() {
        const { isLoginActive } = this.state;
        const current = isLoginActive ? "Register" : "Login";
        const currentActive = isLoginActive ? "Login" : "Register";
        return (
            <div className="app">
                <div className="login">
                    <div className="container">
                        {isLoginActive && <Login containerRef={(ref) => this.current = ref} />}
                        {!isLoginActive && <Register containerRef={(ref) => this.current = ref} />}
                    </div>
                    <RightSideScreen current={current}
                        currentActive={currentActive}
                        containerRef={ref => this.RightSideScreen = ref}
                        onClick={this.changeSide.bind(this)} />
                </div>
            </div>
        )
    }
}

const RightSideScreen = props => {
    return <div className="rightSideScreen" ref={props.containerRef} onClick={props.onClick}>
        <div className="info">
            {props.current}
        </div>
    </div>
}