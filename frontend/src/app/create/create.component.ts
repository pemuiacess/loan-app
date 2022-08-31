import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  loanForm !: FormGroup

  constructor(private formBuilder: FormBuilder, private api: ApiService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.loanForm = this.formBuilder.group({
      loanId: ['', Validators.required]
    });

    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params.get('lnId'));
      console.log(params.get('typicalExclusion'));
      //this.loanForm.controls['typicalExclusion'].setValue(params.get('typicalExclusion'));
      this.loanForm.controls['loanId'].setValue(params.get('lnId'));
    });
  }

  create() {
    console.log(this.loanForm.value);
    if (this.loanForm.valid) {
      this.api.postLoan(this.loanForm.value['loanId'])
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
