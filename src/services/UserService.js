class UserService {
   async getUsers(page){
        const response = await fetch(
            `https://githubusers-backend.herokuapp.com/api/users?page=${page}&limit=10`
        );

        return response.json();
    }

    async getUserbyId(username){
        const response = await fetch(
            `https://githubusers-backend.herokuapp.com/api/users/${username}/details`
        );

        return response.json();
    }
    async getRepositories(username){
        const response = await fetch(
            `https://githubusers-backend.herokuapp.com/api/users/${username}/repos`
        );

        return response.json();
    }
}

export default new UserService();
