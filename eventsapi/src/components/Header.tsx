import { Nav, NavItem, NavLink } from "reactstrap";

export function Header () {
    return (
        <div className="Header">
            <h1>Events Finder</h1>
            <h5>Enjoy your event experience!</h5>
            <Nav>
            <NavItem>
                <NavLink href="/eventlist">
                    Search
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/bucketlist">
                    Bucket List
                </NavLink>
            </NavItem>
            </Nav>
        </div>
    )
}