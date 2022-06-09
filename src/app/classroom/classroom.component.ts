import { Component } from '@angular/core';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
})
export class ClassroomComponent {
  className:string = 'T2203E';
  studentNames:string[] = ["Đỗ Văn Thắng","Vũ Thị Ngọc Ánh"];
  studentAge:number[] = [22,20];
  studentTel:number[] = [1234565545,23432425];
  changeName(){
    this.className = "T2204M";
  }
}
