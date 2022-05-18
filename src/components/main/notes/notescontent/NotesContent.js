const NotesContent = ({ note }) => {
  return (
    <div className="row-content">
      <span>
        <i className="fa-solid fa-pencil"></i>Anotações{" "}
        <span className="space">{note.date.split("T")[1].slice(0, 5)}</span>
      </span>
      {note.attachments.images.length > 0 ? (
        <div className="images-article">
          {note.attachments.images.map((img) => (
            <img key={img.id} src={img.thumb_url} alt="images from each note" />
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
