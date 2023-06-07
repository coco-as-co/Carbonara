import { getCurrentUser } from "@/api/auth";

export function useGetCurrentUser() {
  return new Promise((resolve, reject) => {
    if (JSON.parse(sessionStorage.getItem("ara-app-token")) == null) {
      return reject(null);
    }

    getCurrentUser()
      .then(({ data }) => {
        const currentUser = { ...data };
        resolve(currentUser);
      })
      .catch((error) => {
        console.log(error);
        reject(null);
      });
  });
}
