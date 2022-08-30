import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  loanForm !: FormGroup

  constructor(private formBuilder:FormBuilder,private api:ApiService,
    private dialogRef:MatDialogRef<DeleteComponent>) { }

  ngOnInit(): void {

    this.loanForm= this.formBuilder.group({
      loanId:['',Validators.required]
    })
  }

  delete(){
    console.log(this.loanForm.value);
    if(this.loanForm.valid){
      this.api.postLoan(this.loanForm.value)
      .subscribe({
        next:(res)=>{
          alert("Loan added successfully");
          this.loanForm.reset();
          this.dialogRef.close('deleted');
        },
        error:()=>{
          alert("loan deletion failed");
        }     
      })
    }
  }

}
