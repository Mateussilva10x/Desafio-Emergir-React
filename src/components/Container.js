import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import { PlantationsContext } from "../context/PlantationsContext";
import { DataContext } from "../context/Data";

import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";
import Loading from "./Loading";

const Container = () => {
  const { isLoading: notesLoading } = useContext(NotesContext);
  const { isLoading: plantationsLoading } = useContext(PlantationsContext);
  const { isLoading: farmDetailsLoading } = useContext(DataContext);

  const isLoading = notesLoading && plantationsLoading && farmDetailsLoading;
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Main />
          <Footer />
        </>
      )}
    </>
  );
};

export default Container;
