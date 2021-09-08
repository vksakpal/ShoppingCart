import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/shared/services/product.service";

@Component({
  selector: "app-menubar",
  templateUrl: "./menubar.component.html",
  styleUrls: ["./menubar.component.scss"],
})
export class MenubarComponent implements OnInit {
  cartCount = 0;

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.cartCount = this.productService.getLocalCartProducts().length;
  }
}
