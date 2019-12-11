import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingProfileComponent } from './setting-profile/setting-profile.component';
import { SettingLogoutComponent } from './setting-logout/setting-logout.component';

const routes: Routes = [
  
  { path : "home" , component : HomeComponent },
  { path : "contact" , component : ContactComponent },
  
  // redirect example 
  { path : "" , redirectTo : "/home" ,pathMatch : "full" },
  //if we have do component : HomeComponent in above line,
  //it will not be redirected to home page and it will show only content of HomeComponent

 // congiguring child routes
  {  
    path : "setting" , 
    component : SettingComponent,
    children :[
      { path : "" , redirectTo : "profile" ,pathMatch : "full" },
      {path : "profile" ,component : SettingProfileComponent},
      {path : "logout", component : SettingLogoutComponent},
      {path : "**" ,  redirectTo : "profile" ,pathMatch : "full" },
    ]
  },


  // Error OR Page not found handling.....
  //any URL mentioned than above,will be treated as "Page not Found" 
  {path : "**" , component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
