import { Component, OnInit } from '@angular/core';
import { dataStudents } from '../data/data-students';
import { StudentService } from 'src/app/services/student.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'fullName', 'birthday', 'address', 'educationLevel', 'gender', 'email', 'phone', 'status', 'functions'];
  dataSource = dataStudents;

  constructor(private studentService: StudentService, private sharedService: SharedService) { }

  ngOnInit(): void {
  this.studentService.getUsers().subscribe((valor) => {console.log(valor)});
  this.studentService.postData(
    {
      name: "Chandler",
      lastName: "Runte",
      birthday: "1955-05-04T11:30:18.451Z",
      address: "944",
      educationLevel: 'Preescolar',
      gender: "M",
      email: "Hillary_Runolfsson85@hotmail.com",
      phoneNumber: 3572730390,
      isActive: false,
      id: "18"
     }
  ).subscribe(
    Response => {
      console.log(Response);
    },
    Error => {
      console.error(Error);
    }
  )
  }

  renderDataTable(element: any) {
    this.dataSource = this.studentService.deleteData(element);
  }

  sendDataUser(element:any){
    const index = dataStudents.findIndex(student => student.id === element);
    this.sharedService.setMessage(dataStudents[index]);
  }

}
