import { Nav, NavItem, NavLink } from "reactstrap";

export function Header () {
    return (
        <div className="Header">
            <h1>Events Finder</h1>
            <Nav>
            <NavItem>
                <NavLink active href="#">
                    Search
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink active href="#">
                    Bucket List
                </NavLink>
            </NavItem>
            </Nav>
        </div>
    )
}