import { DataProvider } from "./context/Data";
import { NotesContextProvider } from "./context/NotesContext";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <DataProvider>
      <NotesContextProvider>
        <Header />
        <Main />
        <Footer />
      </NotesContextProvider>
    </DataProvider>
  );
}

export default App;
