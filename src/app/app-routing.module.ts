import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserAccountComponent } from './user-account/user-account.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  { path: '', component: UserHomeComponent },
  { path: 'konto', component: UserAccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
