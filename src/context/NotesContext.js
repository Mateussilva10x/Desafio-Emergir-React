import { createContext } from "react";

import { useQuery } from "react-query";
import { fetcher } from "../utils/Fetcher";

const key = "https://justcors.com/tl_34d9e98/";
const token = "379238b5-705c-48bc-b8c9-27e26676b417";

export const NotesContext = createContext();

export const NotesContextProvider = ({ children }) => {
  const url = `${key}https://farmbox.cc/api/public/technical_visit_report/notes.json?token=${token}`;

  const { data: notes, isLoading } = useQuery("allNotes", () => fetcher(url), {
    refetchIntervalInBackground: true,
  });

  const notesFarm = [];
  const notesPlantations = [];
  notes?.results.map((note) =>
    note.location_type === "Farm"
      ? notesFarm.push(note)
      : notesPlantations.push(note)
  );

  return (
    <NotesContext.Provider value={{ notesFarm, notesPlantations, isLoading }}>
      {children}
    </NotesContext.Provider>
  );
};
