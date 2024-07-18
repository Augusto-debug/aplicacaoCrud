import { PencilIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/solid";
import axios from "axios";
const Box = ({ note, refreshNotes }) => {
  const handleEdit = async () => {
    const newText = prompt("Digite o novo texto:", note.texto);
    if (newText) {
      try {
        await axios.put(`http://localhost:8800/${note.id}`, {
          texto: newText,
        });
        refreshNotes();
      } catch (err) {
        console.error("Erro ao atualizar a nota:", err);
      }
    }
  };
  const handleDelete = async () => {
    const confirmDelete = confirm(
      "Você tem certeza que deseja deletar esta nota?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8800/${note.id}`);
        refreshNotes();
      } catch (err) {
        console.error("Erro ao deletar a nota:", err);
      }
    }
  };
  return (
    <div className="border-2 border-gray-300 flex justify-between items-center bg-white p-5 w-10/12 rounded my-2 hover:border-l-orange-500">
      <div className="flex items-center justify-center">
        <span>{note.id}</span>
        <p className="ml-2">{note.texto}</p>
      </div>
      <div className="flex ">
        <PencilIcon
          width={15}
          onClick={handleEdit}
          className="mr-5 cursor-pointer"
        />
        <TrashIcon
          width={15}
          onClick={handleDelete}
          className="mr-10 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Box;
