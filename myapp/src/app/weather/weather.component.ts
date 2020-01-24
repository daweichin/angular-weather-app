import { Component, OnInit } from "@angular/core";
require("dotenv").config();

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.scss"]
})
export class WeatherComponent implements OnInit {
  public temperature: number;
  public celsiusOn: boolean;
  public measurement: string;
  public summary: string;
  public timezone: string;
  public icon: string;

  constructor() {
    this.celsiusOn = false;
    this.measurement = "F";
  }

  ngOnInit() {
    this.getData();
  }

  toggleTemperature() {
    if (!this.celsiusOn) {
      var celsius = Math.round((this.temperature - 32) * (5 / 9));
      this.temperature = celsius;
      this.measurement = "C";
      this.celsiusOn = true;
    } else {
      this.temperature = Math.round(this.temperature * (9 / 5) + 32);
      this.measurement = "F";
      this.celsiusOn = false;
    }
  }

  getData() {
    window.addEventListener("load", () => {
      let long;
      let lat;

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          console.log(position);
          long = position.coords.longitude;
          lat = position.coords.latitude;

          var api_key = process.env.apiKey;

          const proxy = "https://cors-anywhere.herokuapp.com/";
          const apiKey = `${proxy}${api_key}${lat},${long}`;

          fetch(apiKey)
            .then(response => {
              return response.json();
            })
            .then(data => {
              console.log(data);
              // mapping state to props essentially
              this.temperature = Math.round(data.currently.temperature);
              this.summary = data.currently.summary;
              this.timezone = data.timezone;
              this.icon = data.currently.icon.split(" ").join("-");
            });
        });
      }
    });
  }
}
