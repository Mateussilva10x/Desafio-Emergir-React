import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [showImage, setShowImage] = useState("");

  const toggleShow = () => {
    setShow(!show);
  };

  const handleImage = (image) => {
    setShowImage(image);
  };

  return (
    <ModalContext.Provider value={{ show, showImage, toggleShow, handleImage }}>
      {children}
    </ModalContext.Provider>
  );
};
