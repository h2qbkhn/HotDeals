module HQHO.HotDeals.Services {
    "use strict";
    export interface IApi {
        dealService: Services.DealService;
        subCategoryService: Services.SubCategoryService;
        categoryService: Services.CategoryService;
        typedealService: Services.TypeDealService;
        loginService: Services.LoginService;
        authService: Services.AuthService; 
        tokensManagerService: Services.TokensManagerService; 
        authInterceptorService: Services.AuthInterceptorService; 
    }

    export class Api implements IApi {
        constructor(
            public dealService: Services.DealService,
            public subCategoryService: Services.SubCategoryService,
            public categoryService: Services.CategoryService,
            public typedealService: Services.TypeDealService,
            public loginService: Services.LoginService, 
            public authService: Services.AuthService,
            public tokensManagerService: Services.TokensManagerService, 
            public authInterceptorService: Services.AuthInterceptorService
        ) {
        }

    }
    angular.module('HotDeals').service('Api', ['DealServ', 'SubCategoryServ', 'CategoryServ',
        'TypeDealServ', 'LoginServ','AuthServ', 'TokensManagerServ', 'AuthInterceptorServ', 
        Api])
}