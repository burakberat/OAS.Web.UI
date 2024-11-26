import { Component, OnInit } from '@angular/core';
import { Personel } from '../models/personel.model';
import { AlisverisListComponent } from '../alisveris-list/alisveris-list.component';

@Component({
  selector: 'app-personel-list',
  imports: [AlisverisListComponent],
  templateUrl: './personel-list.component.html',
  styleUrl: './personel-list.component.scss',
})
export class PersonelListComponent implements OnInit {
  personelList: Personel[] | undefined;
  seciliPersonel: Personel | undefined;

  //injection'lar yönetilir.
  constructor() { }

  //ilgili list veya yüklenmesi gereken verileri burada yükleriz.
  ngOnInit(): void {
    this.personelList = [
      { id: 1, ad: 'Kerem', soyad: 'Balaban', birimAd: 'BT', birimId: 1 },
      { id: 1, ad: 'Hakan', soyad: 'Calik', birimAd: 'Haberleşme', birimId: 2 },
      { id: 1, ad: 'Julide', soyad: 'Adivar', birimAd: 'Bakim', birimId: 3 },
    ];
  }

  personelAlisverisListesiGetir(item: Personel) {
    this.seciliPersonel = item;
  }
}
