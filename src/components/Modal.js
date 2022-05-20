const Modal = (props) => {
  if (!props.show) return null;

  return (
    <div id="modal" className="modal">
      <div className="modal-content">
        <div className="images-modal">
          <img
            id="image-hight"
            src={props.showImage}
            alt="images from each note expanded"
          />
        </div>
        <span onClick={props.onClose} className="close">
          &times;
        </span>
      </div>
    </div>
  );
};

export default Modal;
