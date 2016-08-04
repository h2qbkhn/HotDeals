module HQHO.HotDeals {
    "use strict"; 
    export class Tools {
        static apiServiceBaseUrl: string = location.protocol + '//' + location.host + '/' + 'api/'; 
        static redirectUriAuth: string = location.protocol + '//' + location.host + '/' + 'authcomplete.html'; 
        static clientId: string =  "hotdealsApp"; 
    }
}