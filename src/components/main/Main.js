import Aside from "./aside/Aside";
import "./main.css";
import MainContent from "./maincontent/MainContent";

const Main = () => {
  return (
    <main id="main">
      <section className="load">
        {/* <img src="logo.png" alt="" />
        <h1>LOADING</h1>
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div> */}
      </section>
      <section className="main-container">
        <Aside />
        <MainContent />
      </section>
    </main>
  );
};

export default Main;
