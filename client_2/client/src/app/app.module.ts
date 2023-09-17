import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layouts/home/home.component';
import { PolicyComponent } from './layouts/policy/policy.component';
import { AboutUsComponent } from './layouts/about-us/about-us.component';
import { ShowSittersComponent } from './layouts/show-sitters/showSitters.component';
import { CreateSitterComponent } from './layouts/create-sitter/create-sitter.component';
import { SelectComponent } from './layouts/select/select.component';
import { RatingComponent } from './components/rating/rating.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AlertModalComponent } from './components/alert-modal/alert-modal.component';
import { CreateUserComponent } from './layouts/create-user/create-user.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MainComponent } from './components/main/main.component';
import { CardsComponent } from './components/cards/cards.component';
import { LastJoinComponent } from './components/last-join/last-join.component';
import { UsersStatComponent } from './components/users-stat/users-stat.component';
import { SittersStatComponent } from './components/sitters-stat/sitters-stat.component';
import { UsersComponent } from './layouts/dashboard/users/users.component';
import { SittersComponent } from './layouts/dashboard/sitters/sitters.component';
import { SubComponent } from './layouts/dashboard/sub/sub.component';
import { AddressesComponent } from './layouts/dashboard/addresses/addresses.component';
import { ActionsComponent } from './layouts/dashboard/actions/actions.component';
import { ReviewsComponent } from './layouts/dashboard/reviews/reviews.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChoiceComponent } from './components/choice/choice.component';
import { LogAsComponent } from './layouts/log-as/log-as.component';
import { UserLoginComponent } from './layouts/userLogin/userLogin.component';
import { SitterLoginComponent } from './layouts/sitterLogin/sitterLogin.component';
import { CareGiverProfilComponent } from './layouts/care-giver-profil/care-giver-profil.component';
import { ShowOneSitterComponent } from './layouts/show-one-sitter/show-one-sitter.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdatecaregiverComponent } from './layouts/updatecaregiver/updatecaregiver.component';
import { ChooseSitterComponent } from './choose-sitter/choose-sitter.component';
import { UserSettingsComponent } from './layouts/user-settings/user-settings.component';
import { TopRatedComponent } from './top-rated/top-rated.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PolicyComponent,
    AboutUsComponent,
    CreateSitterComponent,
    SelectComponent,
    RatingComponent,
    LogoutComponent,
    AlertModalComponent,
    CreateUserComponent,
    DashboardComponent,
    HeaderComponent,
    SideNavComponent,
    MainComponent,
    CardsComponent,
    LastJoinComponent,
    UsersStatComponent,
    SittersStatComponent,
    UsersComponent,
    SittersComponent,
    SubComponent,
    AddressesComponent,
    ActionsComponent,
    ReviewsComponent,
    ChoiceComponent,
    LogAsComponent,
    UserLoginComponent,
    SitterLoginComponent,
    CareGiverProfilComponent,
    ShowOneSitterComponent,
    NavbarComponent,
    FooterComponent,
    ShowSittersComponent,
    AddReviewComponent,
    UpdatecaregiverComponent,
    ChooseSitterComponent,
    UserSettingsComponent,
    TopRatedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
