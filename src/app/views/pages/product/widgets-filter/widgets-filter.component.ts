import { Options } from "@angular-slider/ngx-slider";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-widgets-filter",
  templateUrl: "./widgets-filter.component.html",
  styleUrls: ["./widgets-filter.component.scss"],
})
export class WidgetsFilterComponent implements OnInit {
  minValue: number = 0;
  maxValue: number = 3200;
  options: Options = {
    floor: 0,
    ceil: 3200,
  };
  constructor() {}

  ngOnInit(): void {}
}
