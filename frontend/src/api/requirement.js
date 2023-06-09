import { _delete, _get, _getAll, _patch, _post } from "./gateway";

export function getRequirements() {
  return _getAll("/quests");
}

export function getRequirementsByQuest(id) {
  return _getAll("/quests/byQuest/" + id);
}

export function getOneRequirement(id) {
  return _get("/requirements/" + id);
}


export function updateRequirement(id, data) {
  return _patch("/requirements/" + id, data);
}

export function createRequirement(data) {
  return _post("/requirements", data);
}

export function removeRequirement(id) {
  return _delete("/requirements/" + id);
}
