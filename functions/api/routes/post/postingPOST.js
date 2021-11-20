const util = require("../../../lib/util");
const statusCode = require("../../../constants/statusCode");
const responseMessage = require("../../../constants/responseMessage");
const users = require("../../../dbMockup/user");

module.exports = async (req, res) => {
    const { email, name, password } = req.body;

    if (!email || !name || !password) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }

    const existUser = users.filter((obj) => obj.email === email).length > 0;
    if (existUser) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.ALREADY_EMAIL));
    }

    const newUser = {
        id: users.length + 1,
        name,
        password,
        email,
    };

    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.CREATED_USER, newUser));
};