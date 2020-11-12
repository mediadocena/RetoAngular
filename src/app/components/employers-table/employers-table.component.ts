import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EmployerCustom } from 'src/app/models/employer.model';

@Component({
  selector: 'app-employers-table',
  templateUrl: './employers-table.component.html',
  styleUrls: ['./employers-table.component.scss']
})
export class EmployersTableComponent implements OnInit {
  @Input() data: EmployerCustom[] = [];
  @Output() employeeId: EventEmitter<any> = new EventEmitter<any>();
  id;
  displayedColumns: string[] = [
    'id',
    'employeeName',
    'employeeSalary',
    'employeeAge',
    'options'
  ];
  dataSource: MatTableDataSource<EmployerCustom>;
  constructor(private router:Router) {}

  ngOnInit(): void {}
  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.data);
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteEmployer(iden){
    //Eliminar empleado
    this.id = iden;
    console.log('delete',this.id);
    this.employeeId.emit(this.id);
  }
  updateEmployer(id){
    this.router.navigate([`employee/${id}`])
  }

}
