"use strict";

class UserStorage{
    static #users = {
        id: ["rlaalswn","wackie","짱"],
        psword: ["1234", "1234", "123456"],
        name: ["김민주","엄지영","최영옥"],
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

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); //=> {id, psword, name} 키값 생성
        const userInfo = usersKeys.reduce((newUser, info)=>{
            newUser[info] = users[info][idx];
            return newUser;

        }, {});
        console.log('1번' + userInfo);
        return userInfo;
    }

    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);

        return { success: true};
    }
}

module.exports = UserStorage;