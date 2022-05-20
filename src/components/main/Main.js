import { useContext } from "react";
import { DataContext } from "../../context/Data";
import { NotesContext } from "../../context/NotesContext";
import { PlantationsContext } from "../../context/PlantationsContext";

import "./main.css";

import Aside from "./aside/Aside";
import logo from "../../assets/logo.png";
import MainContent from "./maincontent/MainContent";

const Main = () => {
  const { isLoading: notesLoading } = useContext(NotesContext);
  const { isLoading: plantationsLoading } = useContext(PlantationsContext);
  const { isLoading: farmDetailsLoading } = useContext(DataContext);

  const isLoading = notesLoading && plantationsLoading && farmDetailsLoading;
  return (
    <main id="main">
      {isLoading ? (
        <section className="load">
          <img src={logo} alt="" />
          <h1>LOADING</h1>
          <div className="lds-ring">
            <div />
            <div />
            <div />
            <div />
          </div>
        </section>
      ) : (
        <section className="main-container">
          <Aside />
          <MainContent />
        </section>
      )}
    </main>
  );
};

export default Main;
