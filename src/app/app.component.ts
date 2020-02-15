import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  username = "";

  onCheckEmpty() {
    if (!this.username) return true;

    return false;
  }

  resetUsername() {
    this.username = "";
  }
}
