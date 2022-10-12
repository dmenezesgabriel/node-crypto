/**
 * Token like jwt
 */

import { createHmac } from "crypto";

const key = "super-secret!";
const message = "boo 👻";

const hmac = createHmac("sha256", key).update(message).digest("hex");

const key2 = "other-password";
const hmac2 = createHmac("sha256", key2).update(message).digest("hex");

console.log(hmac);
console.log(hmac2);
