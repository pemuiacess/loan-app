import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  loanForm !: FormGroup

  constructor(private formBuilder:FormBuilder,private api:ApiService,
    private dialogRef:MatDialogRef<CreateComponent>) { }

  ngOnInit(): void {

    this.loanForm= this.formBuilder.group({
      loanId:['',Validators.required]
    })
  }

  create(){
    console.log(this.loanForm.value);
    if(this.loanForm.valid){
      this.api.postLoan(this.loanForm.value)
      .subscribe({
        next:(res)=>{
          alert("Loan added successfully");
          this.loanForm.reset();
          this.dialogRef.close('saved');
        },
        error:()=>{
          alert("loan creation failed");
        }     
      })
    }
  }
}
