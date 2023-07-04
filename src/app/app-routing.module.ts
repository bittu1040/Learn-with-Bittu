import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { MyLearningPathComponent } from './component/my-learning-path/my-learning-path.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'project', component: ProjectsComponent},
  {path: 'my-learning-path', component: MyLearningPathComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
