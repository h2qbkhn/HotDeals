module HQHO.HotDeals.Models {
    "use strict";
    export class TypeDeal extends Base {
        public value: number; 
        public label: string;
        constructor(val: number, label: string) {
            super(); 
            this.value = val; 
            this.label = label; 
        }
    }

}