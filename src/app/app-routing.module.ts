import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { JavascriptArticlesComponent } from './components/javascript-articles/javascript-articles.component';
import { AngularArticlesComponent } from './components/angular-articles/angular-articles.component';
import { CodingQuestionsComponent } from './components/coding-questions/coding-questions.component';

const routes: Routes = [
  { path: '', redirectTo: '/learn/overview', pathMatch: 'full' },
  {path: 'aboutme', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'javascript-articles', component: JavascriptArticlesComponent},
  {path: 'angular-articles', component: AngularArticlesComponent},
  {path: 'coding-questions', component: CodingQuestionsComponent},
  {path: 'learn', loadChildren: () => import('./module/learn/learn.module').then(m => m.LearnModule)},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
