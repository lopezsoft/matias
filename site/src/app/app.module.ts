import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// Routes

import { AppRoutingModule } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';

// Services
import { CitiesService } from './services/cities.service';
import { IdentityDocumentsService } from './services/identity-documents.service';
import { TypeOrganizationService } from './services/type-organization.service';
import { TaxRegimeService } from './services/tax-regime.service';
import { TaxLevelService } from './services/tax-level.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
   declarations: [
      AppComponent,
      FooterComponent,
      HeaderComponent,
      BodyComponent,
      LoginComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      HttpClientModule,
      AppRoutingModule
   ],
   providers: [
      FormBuilder,
      CitiesService,
      IdentityDocumentsService,
      TypeOrganizationService,
      CitiesService,
      TaxLevelService,
      TaxRegimeService
   ],
   bootstrap: [
      AppComponent
   ],
   exports: [
      FooterComponent,
      HeaderComponent,
      BodyComponent
   ]
})
export class AppModule { }
