import { createContext } from "react";
import { useFetch } from "../hooks/useFetch";

const key = "https://justcors.com/tl_d625c00/";
const token = "379238b5-705c-48bc-b8c9-27e26676b417";

export const NotesContext = createContext();

export const NotesContextProvider = ({ children }) => {
  const { data: notes } = useFetch(
    `${key}https://farmbox.cc/api/public/technical_visit_report/notes.json?token=${token}`
  );

  const notesFarm = [];
  const notesPlantations = [];
  notes?.results.map((note) =>
    note.location_type === "Farm"
      ? notesFarm.push(note)
      : notesPlantations.push(note)
  );

  return (
    <NotesContext.Provider value={{ notesFarm, notesPlantations }}>
      {children}
    </NotesContext.Provider>
  );
};
