const userModel = require('../models/user.model');

module.exports.createUser = async ({ firstname, lastname, email, password }) => {
    if (!firstname || !email || !password) {
        throw new Error('All fields are required');
    }

    // Hash the password before saving
    const hashedPassword = await userModel.hashPassword(password);

    const user = await userModel.create({
        fullname: { firstname, lastname },
        email,
        password: hashedPassword
    });

    return user;
};
