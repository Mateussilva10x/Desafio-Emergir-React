import Aside from "./aside/Aside";
import MainContent from "./maincontent/MainContent";

import "./main.css";

const Main = () => {
  return (
    <main id="main">
      <section className="main-container">
        <Aside />
        <MainContent />
      </section>
    </main>
  );
};

export default Main;
