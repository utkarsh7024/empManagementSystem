import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.css']
})
export class CreateEmpComponent implements OnInit {

  @Output() onRegister = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  back(){
    this.onRegister.emit(true);
  }
}
