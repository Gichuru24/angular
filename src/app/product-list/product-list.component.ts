import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  // name = 'John Smith';
  addToCart: number = 0;
  product = {
    Name: `Iphone 13`,
    Price: 999,
    Color: `Matte Black`,
    Discount: 8.5,
    Instock: 7,
    pImage: '/assets/images/iphone 15.png',
  };
  getDiscountedPrice() {
    return (
      this.product.Price - (this.product.Price * this.product.Discount) / 100
    );
  }
  onNameChange(event: any) {
    // this.name = event.target.value;
    // console.log(event.target.value);
  }
  decrementCartValue() {
    if (this.addToCart > 0) {
      this.addToCart--;
    }
  }
  incrementCartValue() {
    if (this.addToCart < this.product.Instock) {
      this.addToCart++;
    }
  }
}
