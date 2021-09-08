import { SharedModule } from "./../../../shared/shared.module";

import { ProductModule } from "../../pages/product/product.module";
// Core Dependencies
import { RouterModule } from "@angular/router";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IndexRoutes } from "./index.routing";

// Components
import { IndexComponent } from "./index.component";
import { LoginComponent } from "./login/login.component";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { MenubarComponent } from './menubar/menubar.component';
import { AppfootercontactsComponent } from './appfootercontacts/appfootercontacts.component';
import { AppFooterLinksComponent } from './app-footer-links/app-footer-links.component';
import { FooterAccountsComponent } from './footer-accounts/footer-accounts.component';
import { FooterNewsletterComponent } from './footer-newsletter/footer-newsletter.component';

@NgModule({
  imports: [
    CommonModule,
    ProductModule,
    SharedModule,
    RouterModule.forChild(IndexRoutes),
  ],
  declarations: [
    IndexComponent,
    NavbarComponent,
    LoginComponent,
    FooterComponent,
    MenubarComponent,
    AppfootercontactsComponent,
    AppFooterLinksComponent,
    FooterAccountsComponent,
    FooterNewsletterComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [NavbarComponent, FooterComponent],
  providers: [],
})
export class IndexModule {}
