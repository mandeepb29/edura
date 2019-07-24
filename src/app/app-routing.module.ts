import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { VideoLectureComponent } from './video-lecture/video-lecture.component';
import { CategoryComponent } from './category/category.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { CarouselComponent } from './carousel/carousel.component';


const routes: Routes = [

  { path: 'demo',
  component: CarouselComponent },
  { path: 'aboutus',
  component: AboutComponent },

  { path: 'contactus',
  component: ContactComponent },

  { path: 'lecture',
  component: VideoLectureComponent },

  { path: 'category',
  component: CategoryComponent },

  { path: 'aboutcourse',
  component: CourseDetailsComponent },

  { path: 'bloghome',
  component: BlogHomeComponent },

  { path: 'blog',
  component: BlogSingleComponent },

  { path: 'login',
  component: LoginSignupComponent },

  { path: '**',
   component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
