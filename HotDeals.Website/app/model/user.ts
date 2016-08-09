module HQHO.HotDeals.Models {
    "use strict";
    export interface IUser extends IBase {
    }

    export class User extends Base implements IUser {
        public firstname: string = "";
        public lastname: number = null;
        
        constructor() {
            super();
        }
    }
}