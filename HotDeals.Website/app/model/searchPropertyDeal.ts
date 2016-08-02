module HQHO.HotDeals.Models {
    "use strict";
    export class SearchPropertyDeal extends Base {
        public typeDealId: string; 
        public categoryId: string ; 
        public subCategoryId: string ; 
        public typeLocation: number; 
        public constructor() {
            super(); 
            this.typeDealId = null; 
            this.categoryId = null; 
            this.subCategoryId = null; 
            this.typeLocation = null; 
        }
    }

}