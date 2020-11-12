import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { EmployerFormComponent } from './components/employer-form/employer-form.component';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { EmployersTableComponent } from './components/employers-table/employers-table.component';
import { TableEmployersFeatureComponent } from './features/table-employers-feature/table-employers-feature.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { EditEmployerFeatureComponent } from './features/edit-employer-feature/edit-employer-feature.component';
import { CreateEmployerComponent } from './features/create-employer/create-employer.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployerFormComponent,
    EmployersTableComponent,
    TableEmployersFeatureComponent,
    EditEmployerFeatureComponent,
    CreateEmployerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDividerModule,
    HttpClientModule,
    MatTableModule,
    MatToolbarModule,
    DragDropModule,
    MatProgressSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
