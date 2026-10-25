import { Injectable } from '@nestjs/common';

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
  return 'my all course';
}

getCourseById(id: string): string {
  return `Course with ID: ${id} - from Service`;
}

createCourse(): string {
  return 'Create Course Successful';
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

}
