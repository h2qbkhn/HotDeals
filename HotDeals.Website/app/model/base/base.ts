module HQHO.HotDeals.Models {
    "use strict";
    export interface IBase {
        id: string; 
    }

    export class Base implements IBase{
        public id: string = null; 
        constructor() { };
    }

}