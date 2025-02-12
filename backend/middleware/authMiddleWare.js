import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ success: false, message: "Access denied, no token provided" });
  }

  try {
    const decoded = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);
    req.user = decoded; // Attach user data to req
    next();
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid token" });
  }
};

export default authMiddleware;