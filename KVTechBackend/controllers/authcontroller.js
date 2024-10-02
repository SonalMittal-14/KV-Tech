const User = require("../models/user.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    console.log(req.body);

    try {
        const { name, email, password } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                message: 'User already exists, you can login',
                success: false
            });
        }

        // Create a new user instance
        const newUser = new User({ name, email, password });

        // Hash the password
        newUser.password = await bcrypt.hash(password, 10);

        // Save the new user
        await newUser.save();

        return res.status(201).json({
            message: "Signup Successful",
            success: true
        });
    } catch (err) {
        console.error("Signup error: ", err);
        return res.status(500).json({
            message: "Internal server error, please try again",
            success: false
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        const errorMessage = 'Authentication failed. Please check your email or password.';

        if (!user) {
            return res.status(403).json({ message: errorMessage, success: false });
        }

        // Compare the provided password with the hashed password
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(403).json({ message: errorMessage, success: false });
        }

        // Generate JWT token
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        return res.status(200).json({
            message: "Login successful",
            success: true,
            jwtToken,
            email,
            name: user.name
        });
    } catch (err) {
        console.error("Login error: ", err);
        return res.status(500).json({
            message: "Internal server error, please try again",
            success: false
        });
    }
};

module.exports = {
    signup,
    login
};
