import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { ValidateComponent } from '../validate/validate.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }



  postLoan(loanid: any) {
    return this.http.post<any>("http://localhost:8080/loan?loanid=" + loanid, "").toPromise()
    
    .then(data => {

      return data;
    }).catch(error=>{
      console.log("error");
      console.log(error);
      return null;
  });

  }
  getAllLoan() {
    let response = this.http.get<any>("http://localhost:8080/loan").toPromise()
    
    .then(data => {

      return data;
    }).catch(error=>{
      console.log("error");
      console.log(error);
      return null;
  });

    const mock = [{ "creance": "test2", "dateMaj": "2022-08-29 12:03:46.541" }, { "creance": "test", "dateMaj": "2022-08-29 12:03:25.921" }, { "creance": "test1", "dateMaj": "2022-08-29 12:03:44.838" }, { "creance": "test3", "dateMaj": "2022-08-29 12:03:48.943" }, { "creance": "test4", "dateMaj": "2022-08-29 12:03:50.522" }];

    return response;
  }
  getByLoanId(loanid: any) {
    return this.http.get<any>("http://localhost:8080/loan/byId?loanid=" + loanid).toPromise()
    .then(data=>{
      return data;
    }).catch(error=>{
        console.log("error");
        console.log(error);
        return null;
    });
  }
  deleteByLoanId(loanid: any) {
    return this.http.delete<any>("http://localhost:8080/loan?loanid=" + loanid).toPromise()
    
    .then(data => {

      return data;
    }).catch(error=>{
      console.log("error");
      console.log(error);
      return null;
  });
  }
}
