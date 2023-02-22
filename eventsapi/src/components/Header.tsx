import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

export function Header () {
    return (
        <div className="Header">
            <h1>Events Finder</h1>
            <h5>Enjoy your event experience!</h5>
            <Nav>
            <NavItem> <Link className="Search" to="/eventlist" 
            style={{textDecorationLine: "none", color: "white", 
            fontFamily: "Roboto Condensed, sans-serif"}}>Search</Link></NavItem>

            <NavItem><Link className="BucketList" to="/bucketlist" 
            style={{textDecorationLine: "none",color: "white", 
            fontFamily: "Roboto Condensed, sans-serif", }}>Bucket List</Link></NavItem>
            </Nav>
        </div>
    )
}