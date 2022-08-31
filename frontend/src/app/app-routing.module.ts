import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ValidateComponent } from './validate/validate.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { DeleteComponent } from './delete/delete.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'validate', component: ValidateComponent },
  { path: 'view', component: ViewComponent },
  { path: 'delete', component: DeleteComponent },
  { path: 'create', component: CreateComponent },
];

@NgModule({
  declarations: [],
 
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  
})
export class AppRoutingModule { }
