export class Product{
    id:number;
    name:string;
    price:number;
    categoryId:number;
    description:string;
    imageUrl:string;

    constructor(id: number, name: string, price: number, category: number, desc: string, img: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.categoryId = category;
        this.description = desc;
        this.imageUrl = img;
      }
}