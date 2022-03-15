// There are two ways to make component
// Class based

import { Component } from "react";

class Header extends Component {
    render() {
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