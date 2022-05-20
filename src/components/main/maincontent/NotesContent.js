import { useContext } from "react";
import { ModalContext } from "../../../context/ModalContext";

const NotesContent = ({ note }) => {
  const { toggleShow, handleImage } = useContext(ModalContext);

  const handleShowImage = (img) => {
    toggleShow();
    handleImage(img);
  };
  return (
    <div className="row-content">
      <span>
        <i className="fa-solid fa-pencil"></i>Anotações{" "}
        <span className="space">{note.date.split("T")[1].slice(0, 5)}</span>
      </span>
      {note.attachments.images.length > 0 && (
        <div className="images-article">
          {note.attachments.images.map((img) => (
            <img
              onClick={() => handleShowImage(img.medium_url)}
              key={img.id}
              src={img.thumb_url}
              alt="images from each note"
            />
          ))}
        </div>
      )}
      <p>{note.description}</p>
    </div>
  );
};

export default NotesContent;
