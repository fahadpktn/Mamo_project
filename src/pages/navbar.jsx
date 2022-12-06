const Header = () => {
  return (
    <header>
      <div className="main">
        <div className="nav-bar-title">
          <img src="/asset/pachakari.png" className="title-logo"/>
        </div>
        <div className="nav2">
            <h2 className="nav-element">Home</h2>
          <h2 className="nav-element">Markets</h2>
          <h2 className="nav-element">About</h2>
          <h2 className="nav-element">Contact us</h2>
          <input type="text" placeholder="search" className=" search-bar" />
          <input className="login-btn" type='button' value='login' />
        </div>
      </div>
    </header>
  );
};

export default Header;
