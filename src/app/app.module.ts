import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { DeleteEmpComponent } from './delete-emp/delete-emp.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmpComponent,
    DeleteEmpComponent,
    UpdateEmpComponent,
    ViewEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
