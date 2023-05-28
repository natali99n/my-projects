import Users from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async(req, res) => {
    try {
        const users = await Users.find();
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const Register = async(req, res) => {
    const { name, email, password, confPassword } = req.body;
    const candidate = await Users.findOne({email})
    if(candidate) return res.status(400).json({msg: "A user with the same Email already exists"});
    if(password !== confPassword) return res.status(400).json({msg: "Password and Confirm Password do not match"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Users.create({
            name: name,
            email: email,
            password: hashPassword,
            isActive: false
        });
        res.json({msg: "Registration Successful"});
    } catch (error) {
        console.log(error);
    }
}

const generateAccessToken = (id, name, email) => {
    const payload = {
        id,
        name,
        email
    }
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "30m"} )
}
const generateRefreshToken = (id, name, email) => {
    const payload = {
        id,
        name,
        email
    }
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "24h"} )
}

export const Login = async(req, res) => {
  try {
        const user = await Users.findOne({ email: req.body.email });
        if(!user) return res.status(400).json({msg: "Email not found"});
        const match = await bcrypt.compare( req.body.password, user.password);
        if(!match) return res.status(400).json({msg: "Wrong Password"});

        const accessToken = generateAccessToken(user._id, user.name,user.email);
        // console.log(accessToken)
        const refreshToken = generateRefreshToken(user._id, user.name,user.email);
        await Users.updateOne({_id: user._id}, {refresh_token: refreshToken});
        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });

        res.json({ accessToken });
    } catch (error) {
      console.log(error)
      res.status(400).json({msg:"Login error"});
    }
}

export const Logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const user = await Users.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    await Users.updateOnly({refresh_token: null},{
        where:{
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}
