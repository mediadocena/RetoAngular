import { Component, OnInit } from '@angular/core';
import { EmployerServiceService } from 'src/app/services/employer-service.service';

@Component({
  selector: 'app-create-employer',
  templateUrl: './create-employer.component.html',
  styleUrls: ['./create-employer.component.scss']
})
export class CreateEmployerComponent implements OnInit {
  constructor(private employers: EmployerServiceService) {}

  ngOnInit(): void {}
  getFormValue(values) {
    this.createEmployer(values);
  }

  createEmployer(values) {
    this.employers.createEmployee(values).subscribe((res) => {
      console.log('respuesta al crear empleado', res);
    });
  }
}
