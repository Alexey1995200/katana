export interface IMenuCategory {
  title: string,
  link: string,
  ico: string,
  img:string,
}

export interface IAdvantage {
  ico: string;
  text: string;
  isOutlined?: boolean;
}

export interface IMenuItem {
  title: string;
  img: string;
  price: number;
  oldPrice?: number;
  weight?: number;
  description: string;
  isChefsRec?: boolean;
  isNew?: boolean;
  isSpicy?: boolean;
}