import { Component, OnInit } from '@angular/core';
import { EmployerCustom } from 'src/app/models/employer.model';
import { EmployerServiceService } from 'src/app/services/employer-service.service';

@Component({
  selector: 'app-table-employers-feature',
  templateUrl: './table-employers-feature.component.html',
  styleUrls: ['./table-employers-feature.component.scss']
})
export class TableEmployersFeatureComponent implements OnInit {
  data: EmployerCustom[];
  constructor(private employers: EmployerServiceService) {}

  ngOnInit(): void {
    this.getEmployers();
  }
  getEmployers(): void {
    this.employers.doGetAll().subscribe((res) => {
      this.data = res;
    });
  }

  public deleteEmployee(id){
    console.log('del');
    this.employers.doDeleteId(id).subscribe((res)=>{
      console.log(res);
    })
  }

}
