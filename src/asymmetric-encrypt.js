import { publicEncrypt, privateDecrypt } from "crypto";
import { publicKey, privateKey } from "../src/keypair.js";

const message = "The Orcs are comming!";

const encryptedData = publicEncrypt(publicKey, Buffer.from(message));

console.log(encryptedData.toString("hex"));

const decryptedData = privateDecrypt(privateKey, encryptedData);

console.log(decryptedData.toString("utf-8"));
