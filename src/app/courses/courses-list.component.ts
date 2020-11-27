import { Component, OnInit } from '@angular/core';
import {Course } from './Course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {

  filteredCourses: Course[] = [];

  _courses: Course[] = [];

  _filter: string;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this._courses = this.courseService.retrieveAll();
    this.filteredCourses = this._courses;
  }


  set filter(value: string) {
    this._filter = value;

    this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filter.toLocaleLowerCase()) > -1);
  }

  get filter() {
    return this._filter;
  }


}
