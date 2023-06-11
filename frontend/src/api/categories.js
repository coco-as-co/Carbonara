import { _delete, _get, _getAll, _patch, _post } from "./gateway";

export function getCategories() {
  return _getAll("/categories");
}

export function getOneCategorie(id) {
  return _get("/categories/" + id);
}

export function updateCategorie(id, data) {
  return _patch("/categories/" + id, data);
}

export function createCategories(data) {
  return _post("/categories", data);
}

export function removeCategories(id) {
  return _delete("/categories/" + id);
}