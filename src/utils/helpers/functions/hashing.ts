import * as bcrypt from 'bcrypt';
import { hashConfig } from '../config/hash.config';

const hashData = (data: any): Promise<string> => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(data, 10, (err, hash) => {
      if (err) {
        reject(err);
      }
      resolve(hash);
    });
  });
};
export const hash = hashData;
