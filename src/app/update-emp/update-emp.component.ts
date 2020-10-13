import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showUpdateForm:boolean=false;
  showEmpId:boolean=true;
  enableNameEdit=true;
  enableContactEdit=true;
  enableEmailEdit=true;

  showUpdateEmpForm(){
    console.log("show Update called");
    this.showEmpId=false;
    this.showUpdateForm=true;
  }
  edit(rowNum:number){
    this.enableNameEdit=true;
    this.enableContactEdit=true;
    this.enableEmailEdit=true;
    if(rowNum==1){
      this.enableNameEdit=false;


    }
    else if(rowNum==2){
      this.enableContactEdit=false;
    }
    else{
      this.enableEmailEdit=false;
    }

  }
@Output() onBackingAgain =new EventEmitter<boolean>();
back(){
  console.log("back fun called")
  this.onBackingAgain.emit(true);
}
}
