import { _delete, _get, _getAll, _patch, _post } from "./gateway";

export function getBoxeIdeas() {
  return _getAll("/boxeIdeas");
}

export function getOneBoxeIdeas(id) {
  return _get("/boxeIdeas/" + id);
}

export function updateBoxeIdea(id, data) {
  return _patch("/boxeIdeas/" + id, data);
}

export function createboxeIdeas(data) {
  return _post("/boxeIdeas", data);
}

export function removeboxeIdeas(id) {
  return _delete("/boxeIdeas/" + id);
}
