import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postLoan(loanid: any) {
    return this.http.post<any>("http://localhost:8080/loan?loanid=" + loanid, "").toPromise()
    
    .then(data => {
      console.log("Successfully created record");
      return data;
    }).catch(error=>{
      console.log("error while creating record");
      console.log(error);
      return null;
  });

  }
  getAllLoan() {
    let response = this.http.get<any>("http://localhost:8080/loan").toPromise()
    
    .then(data => {
    console.log("getAllLoan fetched data successfully");
      return data;
    }).catch(error=>{
      console.log("error while getAllLoan fetching data ");
      console.log(error);
      return null;
  });

    return response;
  }
  getByLoanId(loanid: any) {
    return this.http.get<any>("http://localhost:8080/loan/byId?loanid=" + loanid).toPromise()
    .then(data=>{
      console.log("getByLoanId fetched data successfully");
      return data;
    }).catch(error=>{
      console.log("error when getByLoanId fetcheding data ");
        console.log(error);
        return null;
    });
  }
  deleteByLoanId(loanid: any) {
    return this.http.delete<any>("http://localhost:8080/loan?loanid=" + loanid).toPromise()
    .then(data => {
      console.log(" deleteByLoanId deleted record successfull ");
      return data;
    }).catch(error=>{
      console.log(" error whe deleteByLoanId deleting record ");
      console.log(error);
      return null;
  });
  }
}
