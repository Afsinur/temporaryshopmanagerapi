const User = require("../models/User");
const { v4: uuidv4 } = require("uuid");

const ApiController = {};

//home
ApiController.getTableHead = (req, res) => {
  res.status(200).json(["Name", "Phone Number", "Date", "Catagory"]);
};
//signup and login
ApiController.signup = async (req, res) => {
  let postedData = req.body;

  try {
    postedData.customerInfo = [];
    await User.create(postedData);
    res.status(200).json(postedData);
  } catch (error) {
    res.status(403).json(error);
  }
};
ApiController.login = async (req, res) => {
  let { email, password } = req.body;
  try {
    await User.login(email, password);
    res.status(200).json({ email, password });
  } catch (error) {
    res.status(403).json(error);
  }
};
//customer
ApiController.addOneCustomerData = async (req, res) => {
  /*
    {
        name: "Jahidul Islam Hridoy",
        phoneNumber: "017xxxxxxx1",
        date: "2 Feb 2023",
        catagory: "paid",
    }
  */

  let id = req.params.id;
  let postedData = req.body;

  try {
    postedData.id = uuidv4();

    await User.findByIdAndUpdate(id, {
      $push: {
        customerInfo: postedData,
      },
    }).exec();
    res
      .status(200)
      .json({ message: "customer information added successfully!" });
  } catch (error) {
    res.status(403).json(error);
  }
};
ApiController.getAllCustomerData = async (req, res) => {
  /*
    {
        name: "Jahidul Islam Hridoy",
        phoneNumber: "017xxxxxxx1",
        date: "2 Feb 2023",
        catagory: "paid",
    }
  */
  try {
    let customerInfo = await User.findById(
      req.params.id,
      "customerInfo"
    ).exec();
    res.status(200).json(customerInfo);
  } catch (error) {
    res.status(403).json(error);
  }
};
ApiController.getOneCustomerData = async (req, res) => {
  /*
    {
        name: "Jahidul Islam Hridoy",
        phoneNumber: "017xxxxxxx1",
        date: "2 Feb 2023",
        catagory: "paid",
    }
  */

  let id = req.params.myId;
  let customerId = req.params.customerId;

  try {
    let customerInfoData = await User.findById(id, "customerInfo").exec();
    let { customerInfo } = customerInfoData;

    let data = customerInfo.filter(({ id }) => id == customerId);

    res.status(200).json(data);
  } catch (error) {
    res.status(403).json(error);
  }
};
//my information
ApiController.getMyInfo = async (req, res) => {
  let email = req.params.email;

  try {
    let { _id } = await User.findOne({ email }).exec();
    res.status(200).json({ id: _id });
  } catch (error) {
    res.status(403).json(error);
  }
};

module.exports = ApiController;
