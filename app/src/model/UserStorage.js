"use strict";

class UserStorage{
    static #users = {
        id: ["rlaalswn","wackie","짱"],
        psword: ["1234", "1234", "123456"],
        nams: ["김민주","엄지영","최영옥"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        console.log(newUsers);
        return newUsers;
    }
}

module.exports = UserStorage;