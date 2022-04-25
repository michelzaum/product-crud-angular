import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  // Aqui está sendo utilizado a injeção de dependência.
  // Dessa forma, o Angular irá ser o responsável por instanciar a classe
  // e nos fornecer as informações da tipagem do 'Router' no momento que
  // o componente 'app-product-crud' for referenciado. Com isso, podemos
  // utilizar este objeto com seus métodos dentro desta classe.
  constructor(private router: Router) { };

  ngOnInit(): void {
  };

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']);
  };
}
