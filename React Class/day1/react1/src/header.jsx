// There are two ways to make component
// Class based

import { Component } from "react";

class Header extends Component {


    constructor(props) {
        console.log(props);
        super(props);
        console.log("constructor");
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    componentDidMount() {
        console.log(this.props, "I am fired");

        // this.timer = setInterval(() => console.log("hello"), 1000);
        console.log("1");
    }

    render() {
        console.log("2");
        return (
            <header>
                <nav>
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            Contact
                        </li>
                        <li>
                            Services
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}


export default Header;