const { Router } = require("express");
const router = Router();
const ApiController = require("../controllers/ApiController");

//home
router.get("/home/tablehead", ApiController.getTableHead);
//signup and login
router.post("/signup", ApiController.signup);
router.post("/login", ApiController.login);
//customer
router.post("/customer/add/:id", ApiController.addOneCustomerData);
router.get("/customer/all/:id", ApiController.getAllCustomerData);
router.get("/customer/one/:myId/:customerId", ApiController.getOneCustomerData);
//my information
router.get("/myinfo/:email", ApiController.getMyInfo);

module.exports = router;
