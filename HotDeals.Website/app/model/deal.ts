module HQHO.HotDeals.Models {
    "use strict"; 
    export interface IDeal {
        title: string; 
        typeDealId: string; 
        categoryId: string; 
        subcategoryId: string; 
        linkTo: string; 
        nameSeller: string; 
        srcImg: string; 
        price: number;
        description: string; 
        startDate: Date; 
        endDate: Date; 
    }

    export class Deal implements IDeal {
        public title: string = "";
        public typeDealId: string = "";
        public categoryId: string = "";
        public subcategoryId: string = "";
        public linkTo: string = "";
        public nameSeller: string = "";
        public srcImg: string = "";
        public price: number = null ;
        public description: string = "";
        public startDate: Date;
        public endDate: Date;

        constructor() {

        }
    }
}