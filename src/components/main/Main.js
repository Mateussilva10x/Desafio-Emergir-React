import Aside from "./aside/Aside";
import "./main.css";
import MainContent from "./maincontent/MainContent";
import { NotesContext } from "../../context/NotesContext";
import { useContext } from "react";

const Main = () => {
  const { isLoading } = useContext(NotesContext);
  return (
    <main id="main">
      {isLoading && (
        <section className="load">
          <img src="logo.png" alt="" />
          <h1>LOADING</h1>
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
      )}
      <section className="main-container">
        <Aside />
        <MainContent />
      </section>
    </main>
  );
};

export default Main;
