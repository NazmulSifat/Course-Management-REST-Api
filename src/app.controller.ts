import { Controller, Get, Param ,Post, Put , Patch} from '@nestjs/common';
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

@Post('create')
createCourse(): string {
  return this.appService.createCourse();
}

@Put('update/:id')
updateCourse(@Param('id') id: string): string {
  return this.appService.updateCourse(id);
}

@Patch('patch/:id')
patchCourse(@Param('id') id: string): string {
  return this.appService.patchCourse(id);
}

}
