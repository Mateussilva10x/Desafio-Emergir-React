import "./notes.css";
import NotesContent from "./notescontent/NotesContent";

const Notes = ({ notes }) => {
  return (
    <div id="row-content" className="content-article row">
      {notes.map((note) => (
        <NotesContent key={note.id} note={note} />
      ))}
    </div>
  );
};

export default Notes;
