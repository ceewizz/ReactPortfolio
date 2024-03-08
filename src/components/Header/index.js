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
            Welcome to Chris Huynh's portfolio page built with React. Here are a few projects that I've worked on.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;