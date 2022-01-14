import {CRUD} from "../../common/crud.interface";
import UsersDao from "../daos/users.dao";

class UserService implements CRUD {
    async create(resource: any): Promise<any> {
        return UsersDao.addUser(resource);
    }

    async deleteById(id: string): Promise<string> {
        return UsersDao.removeUserById(id);
    }

    async list(limit: number, page: number): Promise<any> {
        return UsersDao.getUsers();
    }

    async patchById(id: string, resource: any): Promise<string> {
        return UsersDao.patchUserById(id, resource);
    }

    async putById(id: string, resource: any): Promise<string> {
        return UsersDao.putUserById(id, resource);
    }

    async readById(id: string): Promise<any> {
        return UsersDao.getUserById(id);
    }

    async getUserByEmail(email: string) {
        return UsersDao.getUserByEmail(email);
    }
}

export default new UserService();
