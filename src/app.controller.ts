import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller('courses')
export class AppController {
  constructor(private readonly appService: AppService) {}

/*
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
    */

  @Get()
getAllCourses(): string {
  return this.appService.getAllCourses();
}

@Get(':id')
getCourseById( @Param ('id') id: string): string {
  return this.appService.getCourseById(id);
}
}
