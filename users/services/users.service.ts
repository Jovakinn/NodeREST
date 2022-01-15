import {CRUD} from "../../common/crud.interface";
import UsersDao from "../daos/users.dao";

class UserService implements CRUD {
    [x: string]: any;
    async create(resource: any): Promise<any> {
        return UsersDao.addUser(resource);
    }

    async deleteById(id: string): Promise<any> {
        return UsersDao.deleteUserById(id);
    }

    async list(limit: number, page: number): Promise<any> {
        return UsersDao.getUsers(limit, page);
    }

    async patchById(id: string): Promise<string> {
        return UsersDao.updateUserById(id);
    }

    async putById(id: string, resource: any): Promise<string> {
        return UsersDao.updateUserById(id);
    }

    async readById(id: string): Promise<any> {
        return UsersDao.getUserById(id);
    }

    async getUserByEmail(email: string) {
        return UsersDao.getUserByEmail(email);
    }

    async getUserByEmailWithPassword(email: string) {
        return UsersDao.getUserByEmailWithPassword(email);
    }
}

export default new UserService();
