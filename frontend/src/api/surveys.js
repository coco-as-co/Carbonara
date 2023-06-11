import { _delete, _get, _getAll, _patch, _post } from "./gateway";

export function getSurveys() {
  return _getAll("/surveys");
}

export function getOneSurvey(id) {
  return _get("/surveys/" + id);
}

export function updateSurvey(id, data) {
  return _patch("/surveys/" + id, data);
}

export function createSurvey(data) {
  return _post("/surveys", data);
}

export function removeSurvey(id) {
  return _delete("/surveys/" + id);
}
