import Nav from "../Nav";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>Chris Huynh's Portfolio</h1>
          </div>
          <div>
            <Nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Nav>
          </div>
        </header>
      </section>
      <section class="hero">
        <div class="hero-cta">
      

          <h2>Hello There!</h2>
          <p>
            Welcome to Chris Huynh's portfolio built with React. Here is where I will present some of the work and projects I've completed.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;