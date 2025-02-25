import jwt from 'jsonwebtoken';

const verification = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Not authenticated" }); // ✅ Added `return`
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRECT_KEY); // ✅ Fixed typo & used sync verification

    req.userId = decoded.id; // ✅ Correctly setting user ID
    next(); // ✅ Proceed to the next middleware

  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(403).json({ message: "Invalid token" }); // ✅ Better error message
    } else if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    }
    console.error("Verification Error:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export default verification;
