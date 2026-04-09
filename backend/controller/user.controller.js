const path = require("path");
console.log("resolved path:", require.resolve("../services/user.services"));

const   userService = require("../services/user.services");

console.log("userService:", userService);
console.log("type:", typeof userService);
console.log("keys:", Object.getOwnPropertyNames(userService));


exports.register = async(req, res, next) => {
    try {
        const{email, password} = req.body;
        const successRes = await userService.registerUser(email,password);

        res.json({status:true, success: "User succesfully registrated"});

    }
    catch (error) {
        throw error
    }
}
