import Notes from "../../notes/Notes";
import { NotesContext } from "../../../../context/NotesContext";
import { useContext, useState } from "react";

const PlantationsRow = ({ plantations, isFirst }) => {
  const { notesPlantations } = useContext(NotesContext);
  const [active, setActive] = useState(isFirst);

  const toggleClass = () => {
    setActive(!active);
  };
  return (
    <>
      <div className="content-article-container">
        <div className="content-article-text">
          <h3>
            {plantations.name}
            <span>{plantations.cycle}º ciclo</span>
          </h3>
          <p>
            {plantations.variety.name} {plantations.area} - Ha
          </p>
          <h5>Plantado</h5>
        </div>
        <div style={{ display: "flex" }}>
          <div className="content-article-dates">
            <div className="dates-content">
              <h3>Data do Plantio</h3>
              <p>{plantations.date.split("-").reverse().join("/")}</p>
            </div>
            <div className="dates-content">
              <h3>Emergência</h3>
              <p>
                {plantations.emergence_date !== null
                  ? plantations.emergence_date.split("-").reverse().join("/")
                  : plantations.emergence_prediction_date
                      .split("-")
                      .reverse()
                      .join("/")}
              </p>
            </div>
            <div className="dates-content">
              <h3>Colheita</h3>
              <p>
                {plantations.harvest_prediction_date
                  .split("-")
                  .reverse()
                  .join("/")}
              </p>
            </div>
          </div>
          <div className="icon-content">
            <i
              onClick={toggleClass}
              className={
                !active ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-up"
              }
            ></i>
          </div>
        </div>
      </div>
      {active && (
        <Notes
          notes={notesPlantations
            .filter((notes) => notes.location.id === plantations.id)
            .sort(
              (a, b) =>
                new Date(...b.date.split("/")) - new Date(...a.date.split("/"))
            )}
        />
      )}
    </>
  );
};

export default PlantationsRow;
