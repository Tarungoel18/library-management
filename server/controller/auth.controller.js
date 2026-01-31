import jwt from "jsonwebtoken";
import pool from "../config/db.js";
import { accessTokenExpiry, accessTokenSecret } from "../config/jwt.js";

export const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and Password required" });
  }

  try {
    const [rows] = await pool.query(
      "SELECT * FROM auth_user WHERE username = ? AND password = ?",
      [username, password],
    );

    const user = rows[0];

    if (!user) {
      return res
        .status(401)
        .json({ message: "Invalid Credentials", isLogin: false });
    }

    const accessToken = jwt.sign({ id: user.id }, accessTokenSecret, {
      expiresIn: accessTokenExpiry,
    });

    return res.json({ accessToken, success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error" });
  }
};
