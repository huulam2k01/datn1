var express = require("express")
var router = express.Router()
var controller= require('../controllers/HomePage.controller')

router.get("/tin-tong-hop",controller.News_All);
router.get("/tin-phong-tro",controller.News_RoomHome);
router.get("/tin-nha-tro",controller.News_HouseHome);
router.get("/tin-can-ho",controller.News_ApartmentHome);
router.get("/thong-tin-chi-tiet/:id",controller.News_Detail);
router.get("/thong-tin-chi-tiet/city/:code_city",controller.GetNameCity);
router.get("/thong-tin-chi-tiet/dictrict/:code_dictrict",controller.GetNameDictrict);
router.get("/tin-tuc-gan-do/:code_city/:code_dictrict",controller.NewsNears);
router.post("/tim-kiem/gia-tien/dien-tich",controller.NewsFilter);


module.exports=router;

