const UserModel = require('../model/user.model')
console.log("user.services.js wurde geladen");
class UserService{
    static async registerUser(email,password) {
        try {
                const createUser= new UserModel({email, password});
                return await createUser.save();
        }
        catch(err){
            throw err;

        }
    }

}
console.log("Exportiere UserService");
module.exports = UserService;