import React, {Component} from "react";

class SidebarNav extends Component {
    render() {
        return (
            <li className="sidebar-nav">
                <a 
                    className="sidebar-link" 
                    href={this.props.url}>
                    {this.props.title}
                </a>
            </li>
        );
    }
}

export default SidebarNav;
