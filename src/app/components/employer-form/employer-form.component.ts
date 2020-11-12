import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employer, EmployersResponse } from 'src/app/interfaces/employers-response.interface';
import { EmployerCustom } from 'src/app/models/employer.model';


@Component({
  selector: 'app-employer-form',
  templateUrl: './employer-form.component.html',
  styleUrls: ['./employer-form.component.scss']
})
export class EmployerFormComponent implements OnInit {
  
  @Output() formValue: EventEmitter<any> = new EventEmitter<any>();
  formOwner: FormGroup;
  @Input() data:any = null;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    if(this.data == null){
    this.formOwner = this.formBuilder.group({
      name: [],
      salary: [],
      age: [],
    });
  }else{
    this.formOwner = this.formBuilder.group({
      name: [this.data.employee_name],
      salary: [this.data.employee_salary],
      age: [this.data.employee_age],
      id:[this.data.id]
    });
    console.log(this.data)
  }
  }

  submit() {
    this.formValue.emit(this.formOwner.value);
  }
}
