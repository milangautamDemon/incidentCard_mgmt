import "./NavBar.css";
const NavBar = () => {
    return(
        <>
            <nav className="navbar">
                <div className="navbar-container container">
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className="menu-items">
                        <li>Home</li>
                        <li>About</li>
                        <li>Category</li>
                        <li>Menu</li>
                        <li>Testimonial</li>
                        <li>Contact</li>
                    </ul>
                    <h1 className="logo">Navbar</h1>
                </div>
            </nav>
        </>
    )
}
export default NavBar;