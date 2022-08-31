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
      console.log(params.get('lnId'));
      console.log(params.get('typicalExclusion'));
      this.loanForm.controls['loanId'].setValue(params.get('lnId'));
    });
  }

  delete() {
    console.log(this.loanForm.value);
    if (this.loanForm.valid) {
      this.api.deleteByLoanId(this.loanForm.value['loanId'])
        .subscribe({
          next: (res) => {
            alert("Loan deleted successfully");
            this.loanForm.reset();
          },
          error: () => {
            alert("loan deletion failed");
          }
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
