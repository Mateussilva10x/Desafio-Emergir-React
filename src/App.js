import { DataProvider } from "./context/Data";
import { NotesContextProvider } from "./context/NotesContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { PlantationsContextProvider } from "./context/PlantationsContext";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

import "./App.css";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        <NotesContextProvider>
          <PlantationsContextProvider>
            <Header />
            <Main />
            <Footer />
          </PlantationsContextProvider>
        </NotesContextProvider>
      </DataProvider>
    </QueryClientProvider>
  );
}

export default App;
