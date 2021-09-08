import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
})
export class IndexComponent implements OnInit {

  collapsed;

  carouselList = [
    {
      bannerImg: "./assets/img/slides/slide-1.jpg",
      title: "Big choice of Plumbing products",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra laoreet dui quis molestie.",
    },
    {
      bannerImg: "./assets/img/slides/slide-2.jpg",
      title: "Screwdrivers - Professional Tools",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra laoreet dui quis molestie."
    },
    {
      bannerImg: "./assets/img/slides/slide-3.jpg",
      title: "One more Unique Header",
      description: "Discover a better way to capture, store, and see the world",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
