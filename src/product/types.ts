export interface IProductPicture extends Record<string, any> {
  id: string;
  url: string;
}

export interface IProductAttribute extends Record<string, any> {
  id: string;
  value_name: string;
  name: string;
}

interface IProductAnswer extends Record<string, any> {
  content: string;
  answerAt: string;
}

export interface IProductQuestion extends Record<string, any> {
  id: string;
  content: string;
  answer: IProductAnswer | null;
}

export interface IProductOpinion extends Record<string, any> {
  id: string;
  title: string;
  description: string;
  rating: number;
  likes: number;
  dislikes: number;
}

export interface Product extends Record<string, any> {
  id: string;
  title: string;
  price: number;
  rating: number;
  currency_id: string;
  sold_quantity: number;
  condition: string;
  available_quantity: number;
  attributes: IProductAttribute[];
  seller_info: {
    sellsQuantity: number;
    dispatchInTime: boolean;
    goodClientAtention: boolean;
  };
  opinions: IProductOpinion[];
  similars: string[];
  categories: string[];
  pictures: IProductPicture[];
  questions: IProductQuestion[];
}
