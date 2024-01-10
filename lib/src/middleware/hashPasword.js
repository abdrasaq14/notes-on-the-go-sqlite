"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPaswordAndConfirm = exports.random = void 0;
const crypto_1 = __importDefault(require("crypto"));
const SECRET = 'EVOLENO_REST_API';
const random = () => crypto_1.default.randomBytes(128).toString('base64');
exports.random = random;
const hashPaswordAndConfirm = (salt, password) => {
    return crypto_1.default.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex');
};
exports.hashPaswordAndConfirm = hashPaswordAndConfirm;