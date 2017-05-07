import { Component } from '@angular/core';

@Component({
  selector: "app-home",
  templateUrl: "./home.html",
  styles: [require("./home.scss")]
})
export class HomeComponent {
  title = 'app works!';
}
