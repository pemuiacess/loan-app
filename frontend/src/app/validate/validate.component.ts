import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {
  loanForm !: FormGroup

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute
    //private dialogRef:MatDialogRef<ValidateComponent>,
    //  @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  ngOnInit(): void {
    // console.log(this.data);
    this.loanForm = this.formBuilder.group({
      typicalExclusion: ['', Validators.required],
      loanId: ['', Validators.required]
    });
    this.activatedRoute.paramMap.subscribe(params => {
     // console.log(params.get('name'));
      // this.typicalExclusion = params.get('username');
      //  this.loanForm.controls['typicalExclusion'].setValue(params.get('username'));
      if(params.get('name')!=null){
      this.loanForm.controls['typicalExclusion'].setValue(params.get('name'));
       
      }
    });
  }


  validate() {
    
    let te = this.loanForm.value['typicalExclusion'];
    let loanId= this.loanForm.value['loanId'];
    if (this.loanForm.valid) {
    this.api.getByLoanId(this.loanForm.value['loanId'])
      .then(data=>{
      if(data==null){
        console.log(" routing to create screen as loanid : "+loanId+" doesnot exist ");
          this.router.navigate(['create', { typicalExclusion: te, lnId:loanId }]);
          
        }else{
          console.log(" routing to delete screen as loanid : "+loanId+" exist ");
          this.router.navigate(['delete', { typicalExclusion: te, lnId:loanId, respdata:data[0].dateMaj,te: this.loanForm.controls['typicalExclusion']}]);
        }
      }).catch(error=>{
        console.log(" routing to create screen as loanid : "+loanId+" is unable to be fetched ");

        this.router.navigate(['create', { typicalExclusion: te, lnId:loanId }]);
      });
     

        // .subscribe({
        //   next: (res) => {
        //     alert("Loan validated successfully");
        //     this.loanForm.reset();
        //     console.log("response......."+res);
        //     //this.dialogRef.close('validate');
        //     this.router.navigate(['delete', { typicalExclusion: te, lnId:loanId }]);
        //   },
        //   error: () => {
        //     alert("loan validation failed");
        //     this.router.navigate(['create', { typicalExclusion: te, lnId:loanId }]);
        //   }
        // })
    }
  }

  cancel(){
    this.router.navigate(['search']);
  }

  exit(){
    this.router.navigate(['search']);
  }
}

