import Notes from "../notes/Notes";
import Plantations from "./plantations/Plantations";
import { useContext } from "react";
import { NotesContext } from "../../../context/NotesContext";

const MainContent = () => {
  const { notesFarm } = useContext(NotesContext);
  return (
    <section className="content">
      <h2>Anotações da Fazenda</h2>
      <Notes notes={notesFarm.reverse()} />
      <h2>Eventos dos talhões</h2>
      <div id="content-plantations" className="content-article column">
        <Plantations />
      </div>
    </section>
  );
};

export default MainContent;
