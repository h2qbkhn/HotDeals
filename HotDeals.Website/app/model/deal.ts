module HQHO.HotDeals.Models {
    "use strict"; 
    export interface IDeal extends IBase {
    }

    export class Deal extends Base implements IDeal {
        public title: string = "";
        public typeDealId: string = "";
        public typeDealLabel: string = ""; 
        public typeDealValue: number = null; 
        public isCodePromo: boolean; 
        public categoryId: string = "";
        public subcategoryId: string = "";
        public linkTo: string = "";
        public nameSeller: string = "";
        public addressSeller: string = "";
        public srcImg: string = "";
        public price: number = null;
        public oldPrice: number = null; 
        public codeReduction: string = ""; 
        public description: string = "";
        public startDate: Date;
        public endDate: Date;
        public creationDate: Date; 
        public isOnline: number = 1; 
        constructor() {
            super(); 
        }
    }
}