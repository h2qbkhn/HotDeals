﻿module HQHO.HotDeals.Models {
    "use strict";
    export class SubCategory extends Base {
        public label: string;
        constructor(lab: string) {
            super();
            this.label = lab;
        }
    }

}