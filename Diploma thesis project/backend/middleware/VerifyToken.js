import jwt from "jsonwebtoken";
import Users from "../models/user.js";

export const verifyToken = async (req, res, next) => {
   try{
  //   const candidateUser = await Users.findOne({isActive: true});
  //   if(candidateUser){
  //     next();
  //   } else {

    if(!req.headers.authorization) return res.status(401).json({message: "Authorization header is required"});
    const token = req.headers.authorization.split(' ')[1];
    console.log("this token", token);
    if(token == null) return res.status(401).json({message: "User not authorized"});
    const decodedData = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    // const user = await Users.updateOne({_id: decodedData.id}, {isActive: true});
    // if(!user) return res.sendStatus(403);
        req.user = decodedData;
        //console.log("decodedData", decodedData);
        res.json({ decodedData });
        next();
      //}

  } catch(error){
      console.log(error)
      return res.status(403).json({message: "User not authorized 22"});
  }
}
