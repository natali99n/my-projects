import Users from "../models/user.js";
import jwt from "jsonwebtoken";


const generateAccessToken = (id, name, email) => {
    const payload = {
        id,
        name,
        email
    }
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "30s"} )
}

export const refreshToken = async(req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        console.log( "this:", refreshToken);
        if(!refreshToken) return res.sendStatus(401);
        const user = await Users.findOne({refresh_token: refreshToken});
        if(!user) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err) return res.sendStatus(403);

            const accessToken = generateAccessToken(user._id, user.name,user.email);
            res.json({ accessToken });
        });
    } catch (error) {
        console.log(error);
        console.log("thissssss in refresh token");
    }
}
