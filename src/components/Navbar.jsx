import "./Navbar.css";

function Navbar({ onLogout }) {
    return (
        <nav className="navbar">

            <div className="navbar-left">

                <div className="logo-circle">
                    S
                </div>

                <div>

                    <h2>Shortly</h2>

                    <p>Professional URL Management</p>

                </div>

            </div>

            <button
                className="logout-btn"
                onClick={onLogout}>

                Logout

            </button>

        </nav>
    );
}

export default Navbar;