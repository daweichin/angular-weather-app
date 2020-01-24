import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WeatherComponent } from "./weather/weather.component";
import { SkyconsModule } from "ngx-skycons";

@NgModule({
  declarations: [AppComponent, WeatherComponent],
  imports: [BrowserModule, AppRoutingModule, SkyconsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
