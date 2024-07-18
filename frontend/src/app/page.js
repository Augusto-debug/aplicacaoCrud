"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Box from "./component/Box";
export default function Home() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const getNotes = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      console.log(res);
      setNotes(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddNote = async () => {
    try {
      await axios.post("http://localhost:8800/", { texto: newNote });
      setNewNote("");
      getNotes();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNotes();
  }, [setNotes]);
  // console.log(notes);
  return (
    <div className="h-screen ">
      <header className="h-1/3 bg-blue-400 flex flex-col  items-center justify-center w-full">
        <h1 className="text-white flex justify-center items-center w-10/12 border-b-2 text-4xl pb-5">
          cge.notes
        </h1>
        <section className="flex w-full justify-around items-center mt-5">
          <div className="text-white">
            <p>{notes.length}</p>
            <p>Notas ao total</p>
          </div>
          <div className=" flex ">
            <input
              type="text"
              className="flex rounded outline-none pl-2 "
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              placeholder="Digite a nova nota"
            />
            <button
              type="submit"
              className="p-2 bg-orange-200 rounded hover:bg-orange-300 ml-2"
              onClick={handleAddNote}
            >
              {" "}
              + Adicionar Nota
            </button>
          </div>
        </section>
      </header>
      <main className="h-2/3 bg-gray-100 w-full flex flex-col items-center ">
        {notes.map((note) => (
          <Box key={note.id} note={note} refreshNotes={getNotes} />
        ))}
      </main>
    </div>
  );
}
