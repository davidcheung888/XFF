import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { FoodMenuComponent } from "./food-menu/food-menu.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "food-menu", component: FoodMenuComponent },

  { path: "**", component: HomeComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
