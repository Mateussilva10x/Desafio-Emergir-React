import { QueryClient, QueryClientProvider } from "react-query";
import { DataProvider } from "../context/Data";
import { ModalContextProvider } from "../context/ModalContext";
import { NotesContextProvider } from "../context/NotesContext";
import { PlantationsContextProvider } from "../context/PlantationsContext";

const Providers = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ModalContextProvider>
        <DataProvider>
          <NotesContextProvider>
            <PlantationsContextProvider>{children}</PlantationsContextProvider>
          </NotesContextProvider>
        </DataProvider>
      </ModalContextProvider>
    </QueryClientProvider>
  );
};

export default Providers;
