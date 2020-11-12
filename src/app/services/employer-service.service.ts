import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Employer, EmployersResponse } from '../interfaces/employers-response.interface';
import { EmployerCustom } from '../models/employer.model';
const URL_API='http://dummy.restapiexample.com/api/'
@Injectable({
  providedIn: 'root'
})
export class EmployerServiceService {

  constructor(private http:HttpClient) { }

  public doGetAll(): Observable<any>{
   return this.http.get<EmployersResponse>(URL_API+'v1/employees').pipe(
      map((res) => this.mapInterface(res.data)),
      catchError((err) => err)
    );
  }

  public doGetAllId(id): Observable<any>{
    return this.http.get<EmployersResponse>(URL_API+`v1/employee/${id}`);
   }

   public doDeleteId(id):Observable<any>{
     return this.http.delete(URL_API+`v1/delete/${id}`).pipe(
      map((res) => res),
      catchError((err) => {
        return err;
      })
    );;
   }

   public putEmployee(body): Observable<any> {
     console.log('body del update',body)
    return this.http.put(
        URL_API+`v1/update/${body.id}`,
        JSON.stringify(body)
      );
  }

  public createEmployee(body): Observable<any> {
    return this.http
      .post(
        URL_API+'v1/create',
        JSON.stringify(body)
      )
      .pipe(
        map((res) => res),
        catchError((err) => {
          return err;
        })
      );
  }

  mapInterface(
    employerCollection: Employer[]
  ): EmployerCustom[] {
    const employeeCustomCollection: EmployerCustom[] = [];

    employerCollection.forEach((emp: Employer) => {
      const newEmployerCustom: EmployerCustom = new EmployerCustom();

      newEmployerCustom.employeeAge = emp.employee_age;
      newEmployerCustom.employeeName = emp.employee_name;
      newEmployerCustom.employeeSalary = emp.employee_salary;
      newEmployerCustom.id = emp.id;

      employeeCustomCollection.push(newEmployerCustom);
    });

    return employeeCustomCollection;
  }
  mapOne(employer:Employer[]):EmployerCustom{
    const finalEmployer:EmployerCustom = new EmployerCustom();
    finalEmployer.employeeAge = employer[0].employee_age;
    finalEmployer.employeeName = employer[0].employee_name;
    finalEmployer.employeeSalary = employer[0].employee_salary;
    return finalEmployer;
  }

}
