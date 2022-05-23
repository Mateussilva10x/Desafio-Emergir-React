import { createContext } from "react";
import { useQuery } from "react-query";
import { fetcher } from "../utils/Fetcher";

const key = "https://justcors.com/tl_34d9e98/";
const token = "379238b5-705c-48bc-b8c9-27e26676b417";

export const FarmContext = createContext();

export const FarmContextProvider = ({ children }) => {
  const { data: farm, isLoading } = useQuery(
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
    <FarmContext.Provider value={{ farm, rain, isLoading }}>
      {children}
    </FarmContext.Provider>
  );
};
