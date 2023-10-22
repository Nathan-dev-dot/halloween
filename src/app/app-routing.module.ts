import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {CreateGroupComponent} from "./pages/create-group-component/create-group.component";


export const pages = {
  landing: '',
  createGroup: 'createGroup',
}

export const pagesPaths = {
}

const routes: Routes = [
  {path: pages.createGroup, component: CreateGroupComponent},
  {path: pages.landing, component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
