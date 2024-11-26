import { AlisVerisList } from './alisveris-List.model';

export interface Personel {
  id: number
  ad: string
  soyad: string
  birimId: number
  birimAd: string
  alisverisList?: AlisVerisList[] | undefined
}
