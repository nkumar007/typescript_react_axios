import apiClient from "./api-client";

export interface User {
  id: number;
  name: string;
}

class userService {
  getUsers() {
    const controller = new AbortController();
    const request = apiClient.get<User[]>("/users", {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  deleteUser(user: User) {
    return apiClient.delete("/users/" + user.id);
  }

  addUser(newUser: User) {
    return apiClient.post("/users/", newUser);
  }

  updateUser(user: User, updatedUser: User) {
    return apiClient.patch("/users/" + user.id, updatedUser);
  }
}

export default new userService();
