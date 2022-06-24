"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const express_1 = require("express");
const getUsers = (req, res = express_1.response) => {
    res.json({
        msg: 'getUsuarios'
    });
};
exports.getUsers = getUsers;
const getUser = (req, res = express_1.response) => {
    const { id } = req.params;
    res.json({
        msg: 'getUsuarios',
        id
    });
};
exports.getUser = getUser;
const postUser = (req, res = express_1.response) => {
    const { body } = req;
    res.json({
        msg: 'postUser',
        body
    });
};
exports.postUser = postUser;
const putUser = (req, res = express_1.response) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'putUser',
        body,
        id
    });
};
exports.putUser = putUser;
const deleteUser = (req, res = express_1.response) => {
    const { id } = req.params;
    res.json({
        msg: 'deleteUser',
        id
    });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.controllers.js.map