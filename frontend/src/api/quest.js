import { _delete, _get, _getAll, _patch, _post } from "./gateway";

export function getQuests() {
  return _getAll("/quests");
}

export function getQuestsBySkill(id) {
  return _getAll("/quests/bySkill/" + id);
}

export function getOneQuest(id) {
  return _get("/quests/" + id);
}


export function updateQuest(id, data) {
  return _patch("/quests/" + id, data);
}

export function createQuest(data) {
  return _post("/quests", data);
}

export function removeQuest(id) {
  return _delete("/quests/" + id);
}
