import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto.js';
import { UpdateCourseDto } from './dto/update-course.dto.js';

@Injectable()
export class AppService {

private courses: (CreateCourseDto & { id: number })[] = [];
  private nextId = 1;

  createCourse(dto: CreateCourseDto) {
    const newCourse = {
      id: this.nextId++,
      ...dto,
    };

    this.courses.push(newCourse);

    return {
      message: 'Course created successfully',
      data: newCourse,
    };
  }

  getAllCourses() {
    return this.courses;
  }

  getCourseById(id: string) {
    const course = this.courses.find(
      (course) => course.id === Number(id),
    );

    if (!course) {
      throw new NotFoundException('Course not found');
    }

    return course;
  }

  updateCourse(id: string, dto: UpdateCourseDto) {
    const courseIndex = this.courses.findIndex(
      (course) => course.id === Number(id),
    );

    if (courseIndex === -1) {
      throw new NotFoundException('Course not found');
    }

    this.courses[courseIndex] = {
      ...this.courses[courseIndex],
      ...dto,
    };

    return {
      message: 'Course updated successfully',
      data: this.courses[courseIndex],
    };
  }
}