import {
  Controller,
  Body,
  Get,
  Param,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';

import { AppService } from './app.service.js';
import { CreateCourseDto } from './dto/create-course.dto.js';
import { UpdateCourseDto } from './dto/update-course.dto.js';

@Controller('courses')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('create')
  createCourse(@Body() dto: CreateCourseDto) {
    return this.appService.createCourse(dto);
  }

  @Get()
  getAllCourses() {
    return this.appService.getAllCourses();
  }

  @Get(':id')
  getCourseById(@Param('id') id: string) {
    return this.appService.getCourseById(id);
  }

  @Patch(':id')
  updateCourse(
    @Param('id') id: string,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    return this.appService.updateCourse(id, updateCourseDto);
  }

  
}