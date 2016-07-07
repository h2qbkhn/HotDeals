using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using HotDeals.Website.Models;
using System.Web.Http;
using HotDeals.Business.Repository;

namespace HotDeals.Website.Controllers
{
    public class DealsController : ApiController
    {
        private readonly IDealRepository _dealRepository;

        public DealsController(IDealRepository dealRepository)
        {
            this._dealRepository = dealRepository; 
        }


    }
}
