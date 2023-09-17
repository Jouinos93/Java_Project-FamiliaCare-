import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { AboutUsComponent } from './layouts/about-us/about-us.component';
import { PolicyComponent } from './layouts/policy/policy.component';
import { SitterLoginComponent } from './layouts/sitterLogin/sitterLogin.component';
import { ShowSittersComponent } from './layouts/show-sitters/showSitters.component';
import { CreateSitterComponent } from './layouts/create-sitter/create-sitter.component';
import { SelectComponent } from './layouts/select/select.component';
import { CreateUserComponent } from './layouts/create-user/create-user.component';
import { MainComponent } from './components/main/main.component';
import { ReviewsComponent } from './layouts/dashboard/reviews/reviews.component';
import { ActionsComponent } from './layouts/dashboard/actions/actions.component';
import { SubComponent } from './layouts/dashboard/sub/sub.component';
import { AddressesComponent } from './layouts/dashboard/addresses/addresses.component';
import { SittersComponent } from './layouts/dashboard/sitters/sitters.component';
import { UsersComponent } from './layouts/dashboard/users/users.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { ChoiceComponent } from './components/choice/choice.component';
import { LogAsComponent } from './layouts/log-as/log-as.component';
import { LogChoiceComponent } from './components/logChoice/logChoice.component';
import { UserLoginComponent } from './layouts/userLogin/userLogin.component';
import { CareGiverProfilComponent } from './layouts/care-giver-profil/care-giver-profil.component';
import { ShowOneSitterComponent } from './layouts/show-one-sitter/show-one-sitter.component';

import { UpdatecaregiverComponent } from './layouts/updatecaregiver/updatecaregiver.component';
import { ChooseSitterComponent } from './choose-sitter/choose-sitter.component';
import { UserSettingsComponent } from './layouts/user-settings/user-settings.component';
import { TopRatedComponent } from './top-rated/top-rated.component';




const routes: Routes = [
  //layouts routes
  {path:'', component:HomeComponent},
  { path: 'logout', redirectTo: '', pathMatch: 'full' },
  { path: 'showsitters', component: ShowSittersComponent },
  {path:'aboutus', component:AboutUsComponent},
  {path:'policy', component:PolicyComponent},
  {path:'topGiver', component: ShowSittersComponent},
  {path:'oneGiver/:id', component:ShowOneSitterComponent},
  {path:'update', component:UpdatecaregiverComponent},
  {path:'choose-sitter', component:ChooseSitterComponent},
  {path:'update-user', component:UserSettingsComponent},
  {path:'top-rated', component:TopRatedComponent},

  

  {path:'userLogin', component:UserLoginComponent},
  {path:'login', component: LogAsComponent,
    children:[
      {path:'', component:LogChoiceComponent},
      {path:"asSeeker", component: UserLoginComponent },
  
      // mariem added path for userlogin
      {path:"asGiver", component: SitterLoginComponent }
    ],
  },

  {path:'registration',component: SelectComponent,
    children: [
      {path:'', component:ChoiceComponent},
      {path:"asSeeker", component: CreateUserComponent },
      {path:"asGiver", component: CreateSitterComponent }
    ],
  },


  //After Reg or Log
      //for care giver
      { path:"careGiverProfil", component: CareGiverProfilComponent},

      //for care seeker
      { path:"listOfGivers", component: ShowSittersComponent},
      { path:'careGriver/${id}', component: ShowOneSitterComponent},
      // {path:"careRequest"},




  //For Admin
  { path: "admin/dashboard",
  component: DashboardComponent,
  children: [
    { path: "users", component: UsersComponent },
    { path: "sitters", component: SittersComponent },
    { path: "addresses", component: AddressesComponent },
    { path: "subscriptions", component: SubComponent },
    { path: "actions", component: ActionsComponent },
    { path: "reviews", component: ReviewsComponent },
    { path: "", component: MainComponent }
  ],
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
