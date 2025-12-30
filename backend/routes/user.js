const express=require("express");
const jwt=require("jsonwebtoken");
const router=express.Router();
const {createUser,signInUser,updateUser}=require("./types");
const {User,Account}=require("../db");
const JWT_SECRET = require("../config");
const { authMiddleware } = require("../middleware");
router.post("/signup",async(req,res)=>{
    const createPayload=req.body;
    const parsedPayload=createUser.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"invalid inputs"
            // body:req.body
        })
        return
    }
    const userExists=await User.findOne({username:createPayload.username})
    if(userExists){
        res.status(400).json({
            msg:"username already exists"
        })
        return
    }
    const dbUser=await User.create(createPayload);
    await Account.create({
        userId:dbUser._id,
        balance:1+Math.random()*10000
    })
    const token=jwt.sign({userId:dbUser._id},JWT_SECRET)
    res.json({
        token:token,
        msg:"user created successfully"
    })
})
router.post("/signin",async(req,res)=>{
    const createPayload=req.body;
    const parsedPayload=signInUser.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"invalid inputs"
        })
        return
    }
    const user=await User.findOne({username:createPayload.username})
    if(!user){
        res.status(411).json({
            msg:"login failed"
        })
        return
    }
    const token=jwt.sign({userId:user._id},JWT_SECRET)
    res.json({
        token:token,
        msg:"Signed In successfully"
    })
})
router.put("/updateUser",authMiddleware,async(req,res)=>{
    const createPayload=req.body;
    const parsedPayload=updateUser.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"invalid inputs"
        })
        return
    }
    await User.updateOne({_id:req.userId},createPayload);
    res.status(200).json({
        msg:"User updated successfully"
    })
})
router.get("/bulk",authMiddleware,async(req,res)=>{
    const filter=req.query.filter || "";
    const id=req.userId;
    // const requestingUser=await User.findById(id);
    const users=await User.find({
        $or:[{
                firstName:{
                    $regex:filter //regex used to match substrings
                }
            },{
                lastName:{
                    $regex:filter //regex used to match substrings
                }
            }] //or used for either first name or last name match
    })
    const filtered = users.filter(user => String(user._id) !== String(id));
    res.json({
        user: filtered.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})
router.get("/profile",authMiddleware,async(req,res)=>{
    const id=req.userId;
    const user=await User.findById(id);
    const account=await Account.findOne({userId:id});
    res.json({
        username:user.username,
        firstName:user.firstName,
        lastName:user.lastName,
        balance:account.balance
    })
})

module.exports=router;