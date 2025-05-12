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
  foodType:string;
  price: number;
  oldPrice?: number;
  weight?: number;
  description: string;
  isChefsRec?: boolean;
  isNew?: boolean;
  isSpicy?: boolean;
}

export interface IMainBanner {
  food: IMenuItem;
  isMobileView: boolean;
}

export interface IBlogItem {
  title: string,
  description: string,
  detailedDescription?: {
    descriptionTitle: string,
    descriptionPoints: string[]
  },
  link?: string,
  date:number,
  views:number,
  type?:string,
  img?:string,
}
export interface IBlogBanner {
  banner: IBlogItem;
  // setCurrentSet: (banner: IBlogItem) => void;
  setCurrentSet: React.Dispatch<React.SetStateAction<IBlogItem | null>>;
}