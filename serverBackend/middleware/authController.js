import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/user.js';
import { expressjwt } from 'express-jwt';

dotenv.config({ path: "../.env" });
// console.log("JWT Secret in authController:", process.env.JWT_SECRET);
const signin = async (req, res) => {
  try {


    let user = await User.findOne({ "email": req.body.email});
    // console.log("User found:", user);
    // console.log('authenticating with password:', req.body.password);
 
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    };
    
    if (!user.authenticate(req.body.password)) {
      return res.status(401).json({ error: 'Invalid password' });
    };
    
    console.log("User found and authenticated");

    //Respond with a JWT token
    const token = jwt.sign({ _id: user._id}, process.env.JWT_SECRET)
    console.log("Token generated:", token);

    res.cookie("t", token, { expire: new Date() + 36000000 })

    console.log("Token set in cookie");
    //assign the token to the user
      return res.json({ token, 
        user: { 
          _id: user._id,
          user: user.user,
          email: user.email
        }
      });

  } catch (err) {
    // res.status(401).json({ error: "Could not sign in" });
    res.status(500).json({ error: err.message });
  }
}

//signout by clearing the cookie
const signout = (req, res) => {
  res.clearCookie("t");
  return res.status(200).json({ message: "signed out" });
}

const signup = async (req, res) => {
  try {
    const {name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email is already registered" });
    }
    const user = new User({ name, email, password });
    await user.save();

    const token = jwt.sign({ _id: user._id}, process.env.JWT_SECRET)
    console.log("Token generated:", token);
    res.cookie("t", token, { expire: new Date() + 36000000 })

     return res.json({ 
      token, 
      user: { 
          _id: user._id,
          user: user.user,
          email: user.email
      },
        message : "User registered sucessfully"
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

//verifies JWT token
const requireSignin = expressjwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  userProperty: "auth",
})

const hasAuthorization = (req, res, next) => {
const authorized = req.profile && req.auth && req.profile._id == req.auth._id;
    if (!authorized) {
      return res.status(403).json({ error: "User is not authorized" });
    }
    next()
  }

// const auth = (req, res, next) => {
//   const authHeader = req.headers['authorization'] || req.headers['Authorization'];
//   if (!authHeader) return res.status(401).json({ error: 'No token provided' });

//   const parts = authHeader.split(' ');
//   if (parts.length !== 2 || parts[0] !== 'Bearer') return res.status(401).json({ error: 'Malformed token' });

//   const token = parts[1];
//   const secret = process.env.JWT_SECRET;

//   jwt.verify(token, secret, (err, decoded) => {
//     if (err) {
//       if (err.name === 'TokenExpiredError') return res.status(403).json({ error: 'Token expired' });
//       return res.status(403).json({ error: 'Failed to authenticate token' });
//     }
//     req.user = decoded;
//     next();
//   });
// };

export default {signin, signout, requireSignin, hasAuthorization, signup};