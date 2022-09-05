import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  loanForm !: FormGroup
 
  constructor(private formBuilder: FormBuilder, private api: ApiService,
    private router: Router, private activatedRoute: ActivatedRoute) { }
  
  ngOnInit(): void {

    this.loanForm = this.formBuilder.group({
      loanId: ['', Validators.required],
      dateMaj: ['', Validators.required],
      selectedCheckbox:[false,Validators.required],
      typicalExclusion: ['', Validators.required]
    });

    this.activatedRoute.paramMap.subscribe(params => {
      this.loanForm.controls['loanId'].setValue(params.get('lnId'));
      this.loanForm.controls['dateMaj'].setValue(params.get('respdata'));
      this.loanForm.controls['typicalExclusion'].setValue(params.get('te'));
    });
  }


  delete() {
    console.log(this.loanForm.value);
    if (this.loanForm.valid && this.loanForm.value['selectedCheckbox']) {
      this.api.deleteByLoanId(this.loanForm.value['loanId'])
        .then(data=>{
          if(data!=null){
          console.log("deleted record");
          } 
          this.router.navigate(['view',{name: this.loanForm.value['typicalExclusion']}]);
        }).catch(error=>{
          console.log("error while deleting the record");
          console.log(error);

        })
    }
  }

  cancel(){
    console.log("routed to validate screen");
    this.router.navigate(['validate']);
  
  }

  exit(){
    console.log("routed to search screen");
    this.router.navigate(['search']);
  
  }

}


