import { createContext } from "react";

import { useQuery } from "react-query";
import { fetcher } from "../utils/Fetcher";

const key = "https://justcors.com/tl_34d9e98/";
const token = "379238b5-705c-48bc-b8c9-27e26676b417";

export const PlantationsContext = createContext();

export const PlantationsContextProvider = ({ children }) => {
  const url = `${key}https://farmbox.cc/api/public/technical_visit_report/plantations.json?token=${token}`;

  const { data: plantations, isLoading } = useQuery(
    "allPlantations",
    () => fetcher(url),
    {
      refetchIntervalInBackground: true,
    }
  );

  return (
    <PlantationsContext.Provider value={{ plantations, isLoading }}>
      {children}
    </PlantationsContext.Provider>
  );
};
