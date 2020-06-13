import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { AboutusComponent } from "./aboutus/aboutus.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "signup", component: SignUpComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
