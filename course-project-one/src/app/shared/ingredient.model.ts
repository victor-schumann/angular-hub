export class Ingredient {
/*  public name: string;
    public amount: number; */
    
    constructor(public name: string, public amount: number, public unit: string) {
    }
}

//This is a faster way to create constructors and define the properties of Ingredient at the same time.