import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto.js';


@Injectable()
export class AppService 
{
/*
{
  getHello(): string {
    return 'Hello World!';
  }
}
*/

getAllCourses(): string {
  return 'taz';
}

getCourseById(id: string): string {
  return `Course with ID: ${id} - from Service`;
}



updateCourse(id: string): string {
  return `Update Course ${id} - from Service`;
}

patchCourse(id: string): string {
  return `Patch Course ${id} - from Service`;
}

deleteCourse(id: string): string {
  return `Delete Course ${id} - from Service`;
}



// AppService class-এর ভেতরে যোগ করো
createCourse(dto: CreateCourseDto) {
  return {
    message: 'Congratulations! Your Course created successfully',
    data: dto,
  };
}


}
