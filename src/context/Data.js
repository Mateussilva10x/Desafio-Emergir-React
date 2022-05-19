import { createContext } from "react";
import { useQuery } from "react-query";
import { fetcher } from "../utils/Fetcher";

const key = "https://justcors.com/tl_ab637e4/";
const token = "379238b5-705c-48bc-b8c9-27e26676b417";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const {
    data: farm,
    isLoading,
    error,
  } = useQuery("FarmDetails", () =>
    fetcher(
      `${key}https://farmbox.cc/api/public/content_details.json?token=${token}`
    )
  );

  const { data: rain } = useQuery("RainDetails", () =>
    fetcher(
      `${key}https://farmbox.cc/api/public/technical_visit_report/farm.json?token=${token}`
    )
  );
  return (
    <DataContext.Provider value={{ farm, rain, isLoading, error }}>
      {children}
    </DataContext.Provider>
  );
};
