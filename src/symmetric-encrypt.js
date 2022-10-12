/**
 * Exchange messages with same password
 */

import { createCipheriv, randomBytes, createDecipheriv } from "crypto";

/// Cipher

const message = "I like turtles";
const key = randomBytes(32);
const initialVector = randomBytes(16);

const cipher = createCipheriv("aes256", key, initialVector);

/// Encrypt

const encryptedMessage = cipher.update(message, "utf-8", "hex") + cipher.final("hex");

/// Decrypt

const decipher = createDecipheriv("aes256", key, initialVector);
const decryptedMessage = decipher.update(encryptedMessage, "hex", "utf-8") + decipher.final("utf-8");

console.log(decryptedMessage.toString("utf-8"));
