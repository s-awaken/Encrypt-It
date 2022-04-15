import crypto from 'crypto';
import { randomBytes } from 'crypto';
const IV = randomBytes(32).toString('hex');

const encrypt = (val, key) => {
  const cipher = crypto.createCipheriv('aes-256-cbc', key, IV);
  let encrypted = cipher.update(val, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  return encrypted;
};

const decrypt = (encrypted, key) => {
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, IV);
  const decrypted = decipher.update(encrypted, 'base64', 'utf8');
  return decrypted + decipher.final('utf8');
};

export { encrypt, decrypt };
