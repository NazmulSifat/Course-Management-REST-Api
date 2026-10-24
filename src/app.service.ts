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
  return 'i get all course from sifat';
}

getCourseById(id: string): string {
  return `Get Course with ID: ${id} - from Service`;
}

}
