import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-emp',
  templateUrl: './delete-emp.component.html',
  styleUrls: ['./delete-emp.component.css']
})
export class DeleteEmpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Output() onBacking= new EventEmitter<boolean>();
back(){
  this.onBacking.emit(true);
}
}
