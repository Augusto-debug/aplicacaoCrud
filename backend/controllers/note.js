import { db } from "../db.js";

export const getNotes = (_, res) => {
  const querie = "select * from notes";
  db.query(querie, (error, data) => {
    if (error) return res.json(error);
    return res.status(200).json(data);
  });
};

export const addNote = (req, res) => {
  const querie = "INSERT INTO notes(`texto`) VALUE(?)";

  const value = req.body.texto;

  db.query(querie, [value], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Nova nota criada com sucesso.");
  });
};

export const updateNote = (req, res) => {
  const querie = "UPDATE notes SET `texto` = ? WHERE `id` = ?";

  const value = req.body.texto;

  db.query(querie, [value, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("nota atualizado com sucesso.");
  });
};

export const deleteNote = (req, res) => {
  const querie = "DELETE FROM notes WHERE `id` = ?";

  db.query(querie, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("nota deletado com sucesso.");
  });
};
