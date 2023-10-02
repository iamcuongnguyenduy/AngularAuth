import Role from "../models/Role.js";
import User from "../models/User.js"
import bcrypt from "bcryptjs";


export const userRegister = async (req, res, next) =>{
    try {
        const role = await Role.find({role: "Operator"});
        const salt = await bcrypt.genSalt(10);
        console.log(salt);
        const hashPassword = await bcrypt.hash(req.body.password, salt)
        const newUser = await new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashPassword,
            mobileNumber: req.body.mobileNumber,
            role: role
        })
        await newUser.save()
        return res.status(201).send("User created")
    } catch (error) {
        return res.status(500).send("Something went wrong")
    }
}

export const userLogin = async (req, res, next) =>{
    try {
        const user = await User.findOne({email: req.body.email})
        if(!user){
            return res.status(404).send("Wrong username or password")
        }
        const inputPassword = await req.body.password;
        const isCorrectPassword = await bcrypt.compare(inputPassword, user.password)
        if(!isCorrectPassword){
            return res.staus(401).send("Wrong username or password")
        }
        return res.status(200).send(`${user.email} login successfully`)
    } catch (error) {
        return res.status(500).send("Something went wrong")
    }
}