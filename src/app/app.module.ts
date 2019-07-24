import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { VideoLectureComponent } from './video-lecture/video-lecture.component';
import { CategoryComponent } from './category/category.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
 import { OwlModule } from 'ngx-owl-carousel';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    VideoLectureComponent,
    CategoryComponent,
    CourseDetailsComponent,
    BlogHomeComponent,
    BlogSingleComponent,
    LoginSignupComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
