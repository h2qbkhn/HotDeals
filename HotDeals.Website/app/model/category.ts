﻿module HQHO.HotDeals.Models {
    "use strict";
    export class Category extends Base {
        public label: string; 
        constructor(lab: string) {
            super();
            this.label = lab; 
        }
    } 

}