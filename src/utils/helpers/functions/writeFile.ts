import { writeFile } from 'fs';

const writeAppFile = (
  path: string,
  filename: string,
  data: string,
): Promise<string> => {
  return new Promise((resolve, reject) => {
    writeFile(__dirname + path + filename, data, (err) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};
export default writeAppFile;
