import "../styles/notes.scss";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

const Modal = () => {
  const { toggleShow, showImage, show } = useContext(ModalContext);

  return (
    <>
      {show && (
        <div id="modal" className="modal">
          <div className="modal-content">
            <div className="images-modal">
              <img
                id="image-hight"
                src={showImage}
                alt="images from each note expanded"
              />
            </div>
            <span onClick={toggleShow} className="close">
              &times;
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
