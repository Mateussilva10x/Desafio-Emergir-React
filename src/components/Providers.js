import { QueryClient, QueryClientProvider } from "react-query";

import { FarmContextProvider } from "../context/FarmContext";
import { ModalContextProvider } from "../context/ModalContext";
import { NotesContextProvider } from "../context/NotesContext";
import { PlantationsContextProvider } from "../context/PlantationsContext";

const Providers = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ModalContextProvider>
        <FarmContextProvider>
          <NotesContextProvider>
            <PlantationsContextProvider>{children}</PlantationsContextProvider>
          </NotesContextProvider>
        </FarmContextProvider>
      </ModalContextProvider>
    </QueryClientProvider>
  );
};

export default Providers;
