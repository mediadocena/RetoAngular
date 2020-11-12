import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateEmployerComponent } from './features/create-employer/create-employer.component';
import { EditEmployerFeatureComponent } from './features/edit-employer-feature/edit-employer-feature.component';
import { TableEmployersFeatureComponent } from './features/table-employers-feature/table-employers-feature.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'employers',
    component:TableEmployersFeatureComponent
  },
  {
    path: 'employee/:id',
    component: EditEmployerFeatureComponent

  },
  {
    path:'createemployee',
    component: CreateEmployerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
