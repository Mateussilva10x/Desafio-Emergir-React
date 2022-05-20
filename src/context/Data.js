import { createContext } from "react";
import { useQuery } from "react-query";
import { fetcher } from "../utils/Fetcher";

const key = "https://justcors.com/tl_56f5f74/";
const token = "379238b5-705c-48bc-b8c9-27e26676b417";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const {
    data: farm,
    isLoading,
    error,
  } = useQuery(
    "FarmDetails",
    () =>
      fetcher(
        `${key}https://farmbox.cc/api/public/content_details.json?token=${token}`
      ),
    {
      refetchIntervalInBackground: true,
      refetchInterval: 60000,
    }
  );

  const { data: rain } = useQuery(
    "RainDetails",
    () =>
      fetcher(
        `${key}https://farmbox.cc/api/public/technical_visit_report/farm.json?token=${token}`
      ),
    {
      refetchIntervalInBackground: true,
      refetchInterval: 60000,
    }
  );
  return (
    <DataContext.Provider value={{ farm, rain, isLoading, error }}>
      {children}
    </DataContext.Provider>
  );
};
