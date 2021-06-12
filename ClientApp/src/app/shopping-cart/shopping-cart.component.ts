import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public productId: number;
  public productName: string;
  public price: number;
  public itemDescription: string;
  public starRating: number;
  public imageURL: string;
  public products: any[];

  constructor(private shopping: ShoppingCartService) { }

  ngOnInit() {
  }

  async handleChild(input: string) {
    if (input === "Add Item") {
      this.shopping.addProduct(
        this.productId,
        this.productName,
        this.price,
        this.itemDescription,
        this.starRating,
        this.imageURL
      )
        this.products = [
        this.productId,
        this.productName,
        this.price,
        this.itemDescription,
        this.starRating,
        this.imageURL
        ];
    }
     else if (input === "Delete Item") {
      this.shopping.deleteProduct(this.productId);
    } else if (input === "Update Item") {
      this.shopping.updateProduct(
        this.productId,
        this.productName,
        this.price,
        this.itemDescription,
        this.starRating,
        this.imageURL
      )
    } else if (input === "Get All") {
        await this.shopping.getAll();
    }
  }


}
