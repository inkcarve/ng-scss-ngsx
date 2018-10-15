import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Index } from './views/index/index'
import { About } from './views/about/about'

const routes: Routes = [
	{
		path:"index",
		component: Index
	},
	{
		path:"about",
		component: About
	},
	{
		path:'',
		redirectTo:'/index',
		pathMatch: 'full'
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
