import { _get, _post } from "./gateway";

export function getCurrentUser() {
  return _get("/users/me");
}

export function login(data) {
  return _post("/auth/login", data);
}

export function register(data) {
  return _post("/auth/register", data);
}

export function index() {
  console.log(import.meta.env.VITE_API_URL);
  return _get("/auth");
}