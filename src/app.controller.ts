import {
  Controller,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { Express } from 'express';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Post('encrypt')
  @UseInterceptors(FileInterceptor('file'))
  async encryptFile(@UploadedFile() file: Express.Multer.File): Promise<any> {
    console.log(file);
    console.log('----');
    console.log(file);
    return this.appService.encryptFile(file);
  }
}
