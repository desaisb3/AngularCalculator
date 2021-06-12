import { HttpClient } from '@angular/common/http';
import { IItem } from './shopping-cart/iitem.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http: HttpClient) { }

  //Method to add the product to the shopping cart
  public async addProduct(
    productId: number,
    productName: string,
    price: number,
    description: string,
    starRating: number,
    imageUrl: string
  )
  {
    const item: IItem = {
    productId: productId,
    productName: productName,
    price: price,
    description: description,
    starRating: starRating,
    imageUrl: imageUrl
    }
    await this.http
      .post<IItem>(`addProduct`, item).subscribe(response => {
        console.log(response);
      });
  }

  //Method to delete the product from the shopping cart
  public async deleteProduct(id: number){
    await this.http
    .delete<IItem>(`deleteProduct/${id}`).subscribe(response =>{
      console.log(response);
    });
  }

  //Method to update the existing product
  public async updateProduct(
    productId: number,
    productName: string,
    price: number,
    description: string,
    starRating: number,
    imageUrl: string
  )
  {
    const item: IItem = {
    productId: productId,
    productName: productName,
    price: price,
    description: description,
    starRating: starRating,
    imageUrl: imageUrl
    }
    await this.http
      .put<IItem>(`updateProduct`, item).subscribe(response => {
        console.log(response);
      });
  }


//Method to get the info about all the products
public async getAll(){
  return await this.http
    .get<IItem>(`getProducts`).subscribe(response => {
      console.log(response);
    });
}

}
