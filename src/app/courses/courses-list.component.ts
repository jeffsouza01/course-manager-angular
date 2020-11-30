import { Component, OnInit } from '@angular/core';
import {Course } from './Course';
import { CourseService } from './course.service';
import Swal from 'sweetalert2';

import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

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
    this.retrieveAll();
  }

  retrieveAll() {
    this.courseService.retrieveAll().subscribe({
      next: courses => {
        this._courses = courses
        this.filteredCourses = this._courses;
      },
      error: err => console.log('Error ', err)
    });
  }

  deleteById(courseId: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.courseService.deleteById(courseId).subscribe({
        next: () => {

          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )

          this.retrieveAll()

        },
        error: err => console.log('Error ', err)

        })
      }
    })
  }

  set filter(value: string) {
    this._filter = value;

    this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filter.toLocaleLowerCase()) > -1);
  }

  get filter() {
    return this._filter;
  }

  faTrash = faTrash;
  faEdit = faEdit;

}
