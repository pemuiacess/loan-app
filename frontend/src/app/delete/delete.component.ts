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
      loanId: ['', Validators.required]
    });

    this.activatedRoute.paramMap.subscribe(params => {
      //this.te=params.get('typicalExclusion');
      this.loanForm.controls['loanId'].setValue(params.get('lnId'));
    });
  }

  delete() {
    console.log(this.loanForm.value);
    if (this.loanForm.valid) {
      this.api.deleteByLoanId(this.loanForm.value['loanId'])
        .then(data=>{
            console.log(data);
        }).catch(error=>{
          console.log(error);
        })
    }
  }

  cancel(){
    this.router.navigate(['validate']);
  
  }

  exit(){
    this.router.navigate(['search']);
  
  }

}
