import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { ProjectsComponent } from './component/projects/projects.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'project', component: ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
