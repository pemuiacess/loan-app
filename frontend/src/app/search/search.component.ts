import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  loanForm !: FormGroup

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router  ) {

  }

  ngOnInit(): void {
    this.loanForm = this.formBuilder.group({
      typicalExclusion: ['', Validators.required]

    })
  }


  view() {
    //this.loanForm.reset();
    //this.dialogRef.close('search');
    // this.dialog.open(ViewComponent, {
    //   width:'30%'
    // });
    let te = this.loanForm.value['typicalExclusion'];
    console.log("routing to view screen");
    this.router.navigate(['view',{name:te}]);
  }

  validate() {

    // this.dialogRef.close('search');
    let te = this.loanForm.value['typicalExclusion'];
    this.loanForm.reset();
    console.log("routing to validate screen");
    this.router.navigate(['validate', { name: te }]);
    // this.dialog.open(ValidateComponent, {
    //   width:'30%',
    //   data:{
    //     typicalExclusion:te
    //   }
    // });
  }
}
