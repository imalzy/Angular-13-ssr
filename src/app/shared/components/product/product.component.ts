import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products$!: Observable<IProduct[]>;
  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.products$ = this.firestoreService.col$<IProduct>('product');
  }
}

interface IProduct {
  create_at: any;
  currency: string;
  imageUrl: string;
  name: string;
  price: number;
}