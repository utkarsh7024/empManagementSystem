import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'empManagementSystem';
  empOperations:string;
  createVar=false
  deleteVar=false
  updateVar=false
  viewVar=false
  opName=true
  performOperation(){
    console.log(this.empOperations)
    this.createVar=false
  this.deleteVar=false
  this.updateVar=false
  this.viewVar=false
  this.opName=false
  if(this.empOperations=="create"){
    this.createVar=true;
  }else 
  if(this.empOperations=="delete"){
    this.deleteVar=true;
  }else 
  if(this.empOperations=="update"){
    this.updateVar=true;
  }else
  if(this.empOperations=="list"){
    this.viewVar=true;
  }else if(this.empOperations==undefined){
    this.opName=true;
  }

  

  }

  backButtonPressedInChild(){
    console.log("bavck method in parent")
    this.empOperations=undefined;
    this.performOperation();
  }

}
