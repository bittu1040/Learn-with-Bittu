import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { JavascriptArticlesComponent } from './components/javascript-articles/javascript-articles.component';
import { AngularArticlesComponent } from './components/angular-articles/angular-articles.component';
import { SnippetsImageComponent } from './components/snippets-image/snippets-image.component';
import { InterviewPreparationComponent } from './components/interview-preparation/interview-preparation.component';
import { BlogsComponent } from './components/blogs/blogs.component';

const routes: Routes = [
  { path: '', redirectTo: '/interview-preparation', pathMatch: 'full' },
  {path: 'aboutme', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'javascript-articles', component: JavascriptArticlesComponent},
  {path: 'javascript-articles/:topic', component: JavascriptArticlesComponent},
  {path: 'angular-articles', component: AngularArticlesComponent},
  {path: 'angular-articles/:topic', component: AngularArticlesComponent},
  {path: 'blogs', component: BlogsComponent},
  {path: 'snippets-image', component: SnippetsImageComponent},

  {path: 'interview-preparation', component: InterviewPreparationComponent},

  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
