import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

export function Header () {
    return (
        <div className="Header">
            <h1>Events Finder</h1>
            <h5>Enjoy your event experience!</h5>
            <Nav>
            <NavItem> <Link className="Search" to="/eventlist">Search</Link></NavItem>
            <NavItem><Link className="BucketList" to="/bucketlist">Bucket List</Link></NavItem>
            </Nav>
        </div>
    )
}