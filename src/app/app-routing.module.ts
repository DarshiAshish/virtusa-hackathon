import { SerachDeleteComponent } from './serach-delete/serach-delete.component';
import { CoursesComponent } from './courses/courses.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AdmincourseComponent } from './admincourse/admincourse.component';

const routes: Routes = [
  { path:'',redirectTo:'register',pathMatch:'full'},
  { path: 'register', component:SignupComponent},
  { path: 'login', component:LoginComponent },
  { path :'courses' , component:CoursesComponent},
  {path : 'admin',component:SerachDeleteComponent},
  {path : 'admin/courses',component:AdmincourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
