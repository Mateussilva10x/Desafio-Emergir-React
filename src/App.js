import { DataProvider } from "./context/Data";
import { NotesContextProvider } from "./context/NotesContext";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { QueryClient, QueryClientProvider } from "react-query";
import { PlantationsContextProvider } from "./context/PlantationsContext";
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
