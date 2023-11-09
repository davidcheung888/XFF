import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-food-menu",
  templateUrl: "./food-menu.component.html",
  styleUrls: ["./food-menu.component.scss"],
})
export class FoodMenuComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  // lunch() {
  //   window.location.href = "https://drive.google.com/file/d/1vT5wNs19nenqNkLbMR1Hn_RsyUm5Qhw7/view";
  // }
  // laCarte() {
  //   window.location.href = "https://drive.google.com/file/d/1LOpkn7qA5bqUFo1mOkhSTeabmcz80P4F/view";
  // }
}
