import { Component, Inject, Optional } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { SearchComponent } from './search/search.component';
import { ApiService } from './services/api.service';
import { ValidateComponent } from './validate/validate.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loan-app';
  comp=ValidateComponent

  

  constructor(private dialog: MatDialog, private apiService:ApiService){

  }
 
  

  createDialog() {
    this.dialog.open(CreateComponent, {
      width:'30%'
    });
  }
    deleteDialog() {
      this.dialog.open(DeleteComponent, {
        width:'30%'
      });
    }
    searchDialog() {
        this.dialog.open(SearchComponent, {
          width:'30%'
        });

}
}
