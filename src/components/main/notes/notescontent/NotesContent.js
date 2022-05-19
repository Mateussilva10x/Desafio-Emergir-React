import { useState } from "react";
import Modal from "../../../../utils/Modal";

const NotesContent = ({ note }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="row-content">
      <Modal onClose={() => setShow(false)} show={show} />
      <span>
        <i className="fa-solid fa-pencil"></i>Anotações{" "}
        <span className="space">{note.date.split("T")[1].slice(0, 5)}</span>
      </span>
      {note.attachments.images.length > 0 ? (
        <div className="images-article">
          {note.attachments.images.map((img) => (
            <img
              onClick={() => setShow(true)}
              key={img.id}
              src={img.thumb_url}
              alt="images from each note"
            />
          ))}
        </div>
      ) : (
        ""
      )}
      <p>{note.description}</p>
    </div>
  );
};

export default NotesContent;
