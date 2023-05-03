import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dataStudents } from '../data/data-students';
import { SharedService } from 'src/app/services/shared.service';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-abm-students',
  templateUrl: './abm-students.component.html',
  styleUrls: ['./abm-students.component.css']
})
export class AbmStudentsComponent implements OnInit {

  public formularioPrincipal: FormGroup;
  public formStudents: FormGroup;

  private ONLY_APAHABETS_NO_SPECIAL_CHARACTERS = /^[a-zA-Z\u00F1\u00D1\s]+(\s[a-zA-Z\u00F1\u00D1]+)*$/;
  private ONLY_NUMBERS = /^([0-9]\d*)?$/;

  constructor(private formBuilder: FormBuilder, private sharedService: SharedService, private studentService : StudentService ) { }

  ngOnInit(): void {
    this.formStudents = this.formBuilder.group({
      id: ['', [Validators.required, Validators.pattern(this.ONLY_NUMBERS)]], 
      name: ['', [Validators.required, Validators.pattern(this.ONLY_APAHABETS_NO_SPECIAL_CHARACTERS)]],
      lastName: ['', [Validators.required, Validators.pattern(this.ONLY_APAHABETS_NO_SPECIAL_CHARACTERS)]],
      birthday: ['', [Validators.required]],
      address: ['', [Validators.required]],
      educationLevel: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.maxLength(10) ,Validators.pattern(this.ONLY_NUMBERS)]], 
      isActive: ['', [Validators.required]],
    });

    if (this.sharedService.getMessage() !== "") {
      this.poblarDatos();
    }
  }

  poblarDatos() {
    this.formStudents.patchValue(this.sharedService.getMessage());
  }

  submitData(): any {
    if (this.formStudents.valid) {
      const index = dataStudents.findIndex(student => student.id === this.formStudents.value.id);
      if (index !== -1) {
        this.studentService.updateData(this.formStudents.value);
        this.sharedService.setMessage("");
      } else {
        this.studentService.createData(this.formStudents.value);
        this.sharedService.setMessage("");
      }
      this.formStudents.reset();
    } 
  }
}
