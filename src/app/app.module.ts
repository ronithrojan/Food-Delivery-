import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { AboutusComponent } from "./aboutus/aboutus.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    AboutusComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
