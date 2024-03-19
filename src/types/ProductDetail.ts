import { Colors } from './Color';

export interface DescriptionParagraph {
  title: string;
  text: string[];
}

export interface ProductDetail {
  id: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: Colors[];
  color: Colors;
  images: string[];
  description: DescriptionParagraph[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
}
