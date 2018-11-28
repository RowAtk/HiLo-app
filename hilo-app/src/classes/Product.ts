export class Product{

  static idnum: number =0;
  id: number;
  name: string;
  unit: string;
  unitPrice: number;
  quantity: number;
  category: string;
  description: string;

  constructor(name: string, unitPrice: number, unit: string, quantity: number, category: number, description: string){
    this.id = Product.nextId();
    this.name = name;
    this.unitPrice = unitPrice;
    if(unit !== ""){this.unit = unit;}else{this.unit = "Unit(s)";}
    this.category = Category[category];
    this.quantity = quantity;
    this.description = description;
  }

  static nextId(){
    return Product.idnum++;
  }

  static searchProd(key: number,list: Array<Product> ){
    for(let x = 0; x < list.length; x++){
      if(list[x].getId() === key){
        return x;
      }
    }
    return -1;
  }

  getId(){
    return this.id;
  }

  getName(){
    return this.name;
  }

  getPrice(){
    return this.unitPrice;
  }

  getQuantity(){
    return this.quantity;
  }

  getCategory(){
    return this.category;
  }

  getDescription(){
    return this.description;
  }

  getValue(){
      return this.getPrice() * this.getQuantity();
  }

  item_update(tag: string, value: any){
    switch (tag) {
      case "n":
        this.name = value;
        break;
      case "p":
        this.unitPrice = value;
        break;
      case "u":
        this.unit = value;
        break;
      case "q":
        this.quantity = value;
        break;
      case "c":
        this.category = Category[value];
        break;
      case "d":
        this.description = value;
        break;
      default:
        console.log("Invalid update option");
    }
  }

  purchase(q: number){
    if(q <= this.getQuantity()){
      this.item_update("q", this.getQuantity() - q);
    }else{
      console.log("Quantity requested too high");
    }
  }

  addStock(q: number){
    this.item_update("q", this.getQuantity() + q);
  }


}
