import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { Urun } from '../models/urun.model';

@Component({
  selector: 'app-alisveris-list',
  imports: [FormsModule, DropdownModule],
  templateUrl: './alisveris-list.component.html',
  styleUrl: './alisveris-list.component.scss',
})
export class AlisverisListComponent implements OnInit {
  urunList: Urun[] | undefined;
  secilenUrunId: number | undefined;

  constructor() {}

  ngOnInit(): void {
    this.urunList = [
      { id: 1, ad: 'Elma', miktarTuru: 'Kg' },
      { id: 2, ad: 'Armut', miktarTuru: 'Kg' },
      { id: 3, ad: 'Karpuz', miktarTuru: 'Adet' },
      { id: 4, ad: 'Muz', miktarTuru: 'Kg' },
      { id: 5, ad: 'Portakal', miktarTuru: 'Kg' },
      { id: 6, ad: 'Mandalina', miktarTuru: 'Kg' },
      { id: 7, ad: 'Çilek', miktarTuru: 'Kg' },
      { id: 8, ad: 'Kiraz', miktarTuru: 'Kg' },
      { id: 9, ad: 'Üzüm', miktarTuru: 'Kg' },
      { id: 10, ad: 'Şeftali', miktarTuru: 'Kg' },
    ];
  }
}
