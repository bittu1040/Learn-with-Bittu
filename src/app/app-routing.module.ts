import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { JavascriptArticlesComponent } from './components/javascript-articles/javascript-articles.component';
import { AngularArticlesComponent } from './components/angular-articles/angular-articles.component';
import { CodingQuestionsComponent } from './components/coding-questions/coding-questions.component';
import { SnippetsImageComponent } from './components/snippets-image/snippets-image.component';
import { LearnOverviewComponent } from './module/learn/learn-overview/learn-overview.component';
import { LearnJSComponent } from './module/learn/learn-js/learn-js.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { TableExampleComponent } from './components/table-example/table-example.component';
import { TodoComponent } from './components/todo/todo.component';

const routes: Routes = [
  { path: '', redirectTo: '/javascript-articles', pathMatch: 'full' },
  {path: 'aboutme', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'javascript-articles', component: JavascriptArticlesComponent},
  {path: 'javascript-articles/:topic', component: JavascriptArticlesComponent},
  {path: 'angular-articles', component: AngularArticlesComponent},
  {path: 'angular-articles/:topic', component: AngularArticlesComponent},
  {path: 'blogs', component: BlogsComponent},
  {path: 'coding-questions', component: CodingQuestionsComponent},
  {path: 'snippets-image', component: SnippetsImageComponent},
  {path: 'table', component: TableExampleComponent},

  {path: 'overview', component: LearnOverviewComponent},
  {path: 'interview-preparation', component: LearnJSComponent},

  // {path: 'learn', loadChildren: () => import('./module/learn/learn.module').then(m => m.LearnModule)},

  {path: 'todo', component:  TodoComponent},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
