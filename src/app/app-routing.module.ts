import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';


const routes: Routes = [{
  path: 'currency', component: MainContainerComponent
}, {
  path: 'disclaimer', component: DisclaimerComponent
}, {
  path: '', component: MainContainerComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
