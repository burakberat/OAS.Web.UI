import { Component, Input, input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { Urun } from '../models/urun.model';
import { ButtonModule } from 'primeng/button';
import { AlisVerisList } from '../models/alisveris-list.model';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-alisveris-list',
  imports: [FormsModule, DropdownModule, ButtonModule, InputTextModule],
  templateUrl: './alisveris-list.component.html',
  styleUrl: './alisveris-list.component.scss',
})
export class AlisverisListComponent implements OnInit {
  @Input() alisVerisList: AlisVerisList[] = [];
  urunList: Urun[] | undefined;
  secilenUrunId: number | undefined;

  constructor() { }

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

  urunEkle() {
    if (!this.secilenUrunId) {
      alert('Önce ürün seçiniz!');
      return;
    }

    let secilenUrun = this.urunList?.filter(d => d.id == this.secilenUrunId)[0];
    if (this.alisVerisList?.filter(d => d.id == this.secilenUrunId).length > 0) {
      return alert("Urun sepetinizde var");
    }
    this.alisVerisList.push({ id: this.secilenUrunId, urunId: this.secilenUrunId, urunAd: secilenUrun?.ad! })

  }

  urunSil(urunId: number) {
    let index = this.alisVerisList.findIndex(d => d.urunId == urunId);
    this.alisVerisList.splice(index, 1);
  }
}
