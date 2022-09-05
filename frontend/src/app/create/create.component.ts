import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      this.loanForm.controls['loanId'].setValue(params.get('lnId'));
    });
  }

  create() {
    console.log(this.loanForm.value);
    if (this.loanForm.valid) {
      this.api.postLoan(this.loanForm.value['loanId'])
       .then(data=>{
        if(data!=null){
        console.log("created record");

        }
       }).catch(error=>{
        console.log("error while creating record");
        console.log(error);
       })
    }
  }

  cancel(){
    this.router.navigate(['validate']);
    console.log("routed to validate screen");
  }

  exit(){
    this.router.navigate(['search']);
    console.log("routed to search screen");
  }
}
