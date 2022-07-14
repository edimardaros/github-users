class UserService {
   async getUsers(page){
        const response = await fetch(
            `http://localhost:3001/api/users?page=${page}&limit=10`
        );

        return response.json();
    }

    async getUserbyId(username){
        const response = await fetch(
            `http://localhost:3001/api/users/${username}/details`
        );

        return response.json();
    }
    async getRepositories(username){
        const response = await fetch(
            `http://localhost:3001/api/users/${username}/repos`
        );

        return response.json();
    }
}

export default new UserService();
