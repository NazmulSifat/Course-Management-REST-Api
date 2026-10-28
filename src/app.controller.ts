import { Controller,Body, Get, Param ,Post, Put , Patch, Delete } from '@nestjs/common';
import { AppService } from './app.service.js';
import { CreateCourseDto } from './dto/create-course.dto.js';


@Controller('courses')
export class AppController {
  constructor(private readonly appService: AppService) {}

/*
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
    */


  @Post('create')
  createCourse(@Body() dto: CreateCourseDto) {
    return this.appService.createCourse(dto);
  }

  @Get()
getAllCourses(): string {
  return this.appService.getAllCourses();
}

@Get(':id')
getCourseById( @Param ('id') id: string): string {
  return this.appService.getCourseById(id);
}



@Put('update/:id')
updateCourse(@Param('id') id: string): string {
  return this.appService.updateCourse(id);
}

@Patch('patch/:id')
patchCourse(@Param('id') id: string): string {
  return this.appService.patchCourse(id);
}

@Delete('delete/:id')
deleteCourse(@Param('id') id: string): string {
  return this.appService.deleteCourse(id);
}

}
