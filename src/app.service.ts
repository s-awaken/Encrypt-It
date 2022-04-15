import { Injectable } from '@nestjs/common';
import writeFile from './utils/helpers/functions/writeFile';
import readFile from './utils/helpers/functions/readFile';
import { hash } from './utils/helpers';
import { encrypt, decrypt } from './utils/helpers';

@Injectable()
export class AppService {
  async encryptFile(file: any): Promise<any> {
    const hashed = await hash(file.buffer);
    await writeFile(__dirname + '/..' + '/test/', 'test.key', hashed);
    const encrypted = await encrypt(file.buffer, hashed);
    await writeFile('test/', 'test.enc', encrypted);
    return;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
