const zod=require("zod");
const createUser=zod.object({
    username:zod.string().email(),
    password:zod.string(),
    firstName:zod.string(),
    lastName:zod.string()
})
const signInUser=zod.object({
    username:zod.string().email(),
    password:zod.string()
})
const updateUser=zod.object({
    password:zod.string().optional(),
    firstName:zod.string().optional(),
    lastName:zod.string().optional()
})
module.exports={
    createUser:createUser,
    signInUser:signInUser,
    updateUser:updateUser 
}