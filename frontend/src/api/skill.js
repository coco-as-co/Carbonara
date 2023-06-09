import { _delete, _get, _getAll, _patch, _post } from "./gateway";

export function getSkills() {
  return _getAll("/skills");
}

export function getOneSkill(id) {
  return _get("/skills/" + id);
}

export function updateSkill(id, data) {
  return _patch("/skills/" + id, data);
}

export function createSkill(data) {
  return _post("/skills", data);
}

export function removeSkill(id) {
  return _delete("/skills/" + id);
}
