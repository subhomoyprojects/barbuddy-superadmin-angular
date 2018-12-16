import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* Component */
import { BarlistingComponent } from '../superadmin/barlisting/barlisting.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', redirectTo: '/superadmin/barlisting', pathMatch: 'full' },
  { path: 'superadmin/barlisting', component: BarlistingComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{
    useHash:true
  }) ],
  exports: [ RouterModule ]
  })
export class AppRoutingModule { }
