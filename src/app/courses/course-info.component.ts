import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { Course } from './Course';
import { CourseService } from './course.service';


@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

  course: Course;

  constructor(private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private router: Router) {}

  ngOnInit(): void {
    this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')!).subscribe({
      next: course => {
        this.course = course;
      },
      error: err => console.log('Error ', err)
    });
  }

  save(): void {
    this.courseService.save(this.course).subscribe({
      next: course => {
        console.log(course)
        // Custom alert
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your modifications has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        setTimeout(() =>this.router.navigate(['/courses']),1500 )

      },
      error: err => console.log('Error ', err)
    });
  }
}
