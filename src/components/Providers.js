import { QueryClient, QueryClientProvider } from "react-query";
import { DataProvider } from "../context/Data";
import { NotesContextProvider } from "../context/NotesContext";
import { PlantationsContextProvider } from "../context/PlantationsContext";

const Providers = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        <NotesContextProvider>
          <PlantationsContextProvider>{children}</PlantationsContextProvider>
        </NotesContextProvider>
      </DataProvider>
    </QueryClientProvider>
  );
};

export default Providers;
