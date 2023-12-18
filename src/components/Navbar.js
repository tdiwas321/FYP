import logo from "../reactjs-icon.svg";

function Navbar() {
  return (
    <header>
      <nav className="nav">
        <div className="navLogo">
          <img src={logo} />
          <h1>ReactFacts</h1>
        </div>
        <h2>React Course - Project 1</h2>
      </nav>
    </header>
  );
}

export default Navbar;
