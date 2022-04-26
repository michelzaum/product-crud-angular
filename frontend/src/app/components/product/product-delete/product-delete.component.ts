import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product = {
    id: 0,
    name: '',
    price: 0,
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(String(id)).subscribe(product => {
      this.product = product;
    });
  };

  deleteProduct(): void {
    if (confirm(`Tem certeza que deseja excluir ${this.product.name}?`)) {
      this.productService.delete(String(this.product.id)).subscribe(() => {
        this.productService.showMessage('Produto excluído com sucesso!');
        this.router.navigate(['/products']);
      });
    } else {
      this.cancel();
    };
  };

  cancel(): void {
    this.router.navigate(['/products']);
  };
};
