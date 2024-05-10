export class Product{
    constructor(
      id?:number, name?: string, price?: number, category?: number, desc?: string, img?: string
    )
     {
        this.id = id;
        this.name = name;
        this.price = price;
        this.categoryId = category;
        this.description = desc;
        this.imageUrl = img;
      }
      id?:number|null;
      name?:string|null;
      price?:number|null;
      categoryId?:number|null;
      description?:string|null;
      imageUrl?:string|null;
}