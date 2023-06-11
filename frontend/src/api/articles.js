import { _delete, _get, _getAll, _patch, _post } from "./gateway";

export function getArticles() {
  return _getAll("/articles");
}

export function getOneArticle(id) {
  return _get("/articles/" + id);
}

export function updateArticle(id, data) {
  return _patch("/articles/" + id, data);
}

export function createArticle(data) {
  return _post("/articles", data);
}

export function removeArticle(id) {
  return _delete("/articles/" + id);
}