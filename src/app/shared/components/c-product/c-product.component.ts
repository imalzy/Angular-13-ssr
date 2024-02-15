import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cproduct',
  templateUrl: './c-product.component.html',
  styleUrls: ['./c-product.component.scss']
})
export class CProductComponent implements OnInit {
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
