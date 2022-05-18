import { createContext } from "react";
import { useFetch } from "../hooks/useFetch";

const key = "https://justcors.com/tl_d625c00/";
const token = "379238b5-705c-48bc-b8c9-27e26676b417";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { data: plantations } = useFetch(
    `${key}https://farmbox.cc/api/public/technical_visit_report/plantations.json?token=${token}`
  );

  const { data: farm } = useFetch(
    `${key}https://farmbox.cc/api/public/content_details.json?token=${token}`
  );

  const { data: rain } = useFetch(
    `${key}https://farmbox.cc/api/public/technical_visit_report/farm.json?token=${token}`
  );
  return (
    <DataContext.Provider value={{ plantations, farm, rain }}>
      {children}
    </DataContext.Provider>
  );
};
