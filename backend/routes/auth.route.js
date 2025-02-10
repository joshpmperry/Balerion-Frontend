import { Router } from "express";

const authRouter = Router();

//  Authentication route
authRouter.post("/login", (req, res) => {
  const user = req.body;
  if (!user.name || !user.password) {
    return res.status(400).send("Please provide name and password");
  }
  
  return res.status(201).json({sucess: true, data: "Login is successful"});
})

authRouter.post('/logout', (req, res) => {
  return res.status(201).json({sucess: true, data: "Logout is successful"});
})

export default authRouter;