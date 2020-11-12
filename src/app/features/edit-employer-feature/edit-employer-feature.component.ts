import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employer, EmployersResponse } from 'src/app/interfaces/employers-response.interface';
import { EmployerCustom } from 'src/app/models/employer.model';
import { EmployerServiceService } from 'src/app/services/employer-service.service';

@Component({
  selector: 'app-edit-employer-feature',
  templateUrl: './edit-employer-feature.component.html',
  styleUrls: ['./edit-employer-feature.component.scss']
})
export class EditEmployerFeatureComponent implements OnInit {

  @Output() data:any
  ready:boolean = false;

  constructor(private route: ActivatedRoute,private employers:EmployerServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
     this.employers.doGetAllId(params.get('id')).subscribe((res)=>{
       console.log(res.data);
        this.data = res.data;
        this.ready = true;
      })
    });
    
  }

  updateEmployee(data){
    console.log('Updated: ',data)
    this.employers.putEmployee(data).subscribe((res)=>{
      console.log('respuesta: ',res);
    });
  }


}