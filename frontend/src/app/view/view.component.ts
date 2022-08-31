import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  //loanForm !: FormGroup

  loanForm = new FormGroup({
    typicalExclusion: new FormControl()
});

loans:any;

  constructor(private formBuilder:FormBuilder,private api:ApiService,private router:Router,
    private activatedRouter:ActivatedRoute
    ) { }

  ngOnInit(): void {

    // this.activatedRouter.queryParams.subscribe(params => {
    //  console.log( params['name']);
    // });

    let loanData = this.api.getAllLoan();
    this.loans=loanData;

    this.loans.forEach(ele => {
        console.log(ele.creance);
    });
  }

    export(){

  }

  cancel(){
    
  }

}
