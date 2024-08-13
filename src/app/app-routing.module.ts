import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'aboutme', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)},
  {path: 'contact', loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule)},
  {path: 'javascript-articles', loadChildren: () => import('./components/javascript-articles/javascript-articles.module').then(m => m.JavascriptArticlesModule)},
  {path: 'angular-articles', loadChildren: () => import('./components/angular-articles/angular-articles.module').then(m => m.AngularArticlesModule)},
  {path: 'blogs', loadChildren: () => import('./components/blogs/blogs.module').then(m => m.BlogsModule)},
  {path: 'coding-questions', loadChildren: () => import('./components/coding-questions/coding-questions.module').then(m => m.CodingQuestionsModule)},
  {path: 'snippets-image', loadChildren: () => import('./components/snippets-image/snippets-image.module').then(m => m.SnippetsImageModule)},
  {path: 'table', loadChildren: () => import('./reuse-components/reuse.module').then(m => m.ReuseModule)},
  {path: 'learn', loadChildren: () => import('./module/learn/learn.module').then(m => m.LearnModule)},
  { path: '', redirectTo: '/javascript-articles', pathMatch: 'full' },
  {path: '**', component:PageNotFoundComponent}
  // {path: 'overview', component: LearnOverviewComponent},
  // {path: 'interview-preparation', component: LearnJSComponent},
  // {path: 'learn', loadChildren: () => import('./module/learn/learn.module').then(m => m.LearnModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
