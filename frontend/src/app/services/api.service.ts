import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { ValidateComponent } from '../validate/validate.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  
  
  postLoan(loanid:any){
    return this.http.post<any>("http://localhost:8080?loanid="+loanid,"");
  }
  getAllLoan(){
    let response= this.http.get<any>("http://localhost:8080").subscribe(data=>{
      return data;
    });

    return response;
  }
  getByLoanId(loanid:any){
    return this.http.get<any>("http://localhost:8080/loan?loanid="+loanid);
  }
  deleteByLoanId(loanid:any){
    return this.http.get<any>("http://localhost:8080?loanid="+loanid);
  }
}
