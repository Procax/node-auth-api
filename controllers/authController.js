const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/Users')

 const register = async (req, res) => {
    try {
        const {username, password} = req.body;

        const existinguser = await User.findOne({username})

        if (existinguser)
            return res.status(400).json({ error: "user already exist"})

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword})
        await newUser.save();

        res.json({ message: 'user register'})

    } catch (error) {
        res.status(500).json({ error: 'server error'})
    }
    
}

module.exports = register