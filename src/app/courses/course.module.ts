import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReplacePipe } from '../pipe/replace.pipe';
import { StarComponent } from '../stars/stars.component';
import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './courses-list.component';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent,
    StarComponent,
    ReplacePipe

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },
    ])
  ]

})

export class CourseModule {

}
