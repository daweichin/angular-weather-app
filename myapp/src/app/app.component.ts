import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-weather></app-weather>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = "myapp";
}
