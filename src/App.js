import { React } from "react";
import "./Components/CSS/MainApp.css";
import Header from "./Components/NoteComponents/Header";
import Notes from "./Components/NoteComponents/Notes";
function App() {
  return (
    <div className="main">
      <Header />
      <Notes />
    </div>
  );
}
export default App;