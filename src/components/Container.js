import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import { PlantationsContext } from "../context/PlantationsContext";
import { FarmContext } from "../context/FarmContext";

import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";
import Loading from "./Loading";
import Modal from "./Modal";

const Container = () => {
  const { isLoading: notesLoading } = useContext(NotesContext);
  const { isLoading: plantationsLoading } = useContext(PlantationsContext);
  const { isLoading: farmDetailsLoading } = useContext(FarmContext);

  const isLoading = notesLoading && plantationsLoading && farmDetailsLoading;
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Modal />
          <Header />
          <Main />
          <Footer />
        </>
      )}
    </>
  );
};

export default Container;
