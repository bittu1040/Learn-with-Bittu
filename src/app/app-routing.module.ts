import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { MyLearningPathComponent } from './components/my-learning-path/my-learning-path.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/learn/overview', pathMatch: 'full' },
  {path: 'aboutme', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'learn', loadChildren: () => import('./module/learn/learn.module').then(m => m.LearnModule)},
  {path: 'todo', component: MyLearningPathComponent},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
