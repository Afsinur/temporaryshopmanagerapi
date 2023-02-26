const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
let port_ = process.env.PORT || "5150";
const listen_ = () => {
  console.log(`listening on port ${port_}`);
};

app.use(cors());
app.use(express.json());

app.get("/api/home/tablehead", (req, res) => {
  res.status(200).json(["Name", "Phone Number", "Date", "Catagory"]);
});
app.get("/api/home/tabledata", (req, res) => {
  res.status(200).json([
    {
      name: "Jahidul Islam Hridoy",
      phoneNumber: "017xxxxxxx1",
      date: "2 Feb 2023",
      catagory: "paid",
    },
    {
      name: "Shahriar MD. Afsinur Rahman",
      phoneNumber: "017xxxxxxx2",
      date: "3 Feb 2023",
      catagory: "unpaid",
    },
    {
      name: "MD Safwanur Rahman Sayem",
      phoneNumber: "017xxxxxxx3",
      date: "4 Feb 2023",
      catagory: "paid",
    },
    {
      name: "Jahidul Haq Araf",
      phoneNumber: "017xxxxxxx1",
      date: "2 Feb 2023",
      catagory: "paid",
    },
    {
      name: "Shahriar Taukir Mithun",
      phoneNumber: "017xxxxxxx2",
      date: "3 Feb 2023",
      catagory: "unpaid",
    },
    {
      name: "Tanvir Ahmed Tonmoy",
      phoneNumber: "017xxxxxxx3",
      date: "4 Feb 2023",
      catagory: "paid",
    },
    {
      name: "Mehedi Hasan Mahim",
      phoneNumber: "017xxxxxxx1",
      date: "2 Feb 2023",
      catagory: "paid",
    },
    {
      name: "Hasan Mia",
      phoneNumber: "017xxxxxxx2",
      date: "3 Feb 2023",
      catagory: "unpaid",
    },
    {
      name: "Arif Ahmed Anik",
      phoneNumber: "017xxxxxxx3",
      date: "4 Feb 2023",
      catagory: "paid",
    },
    {
      name: "Shahriar Hossen Emon",
      phoneNumber: "017xxxxxxx1",
      date: "2 Feb 2023",
      catagory: "paid",
    },
    {
      name: "Mehedi Hasan",
      phoneNumber: "017xxxxxxx2",
      date: "3 Feb 2023",
      catagory: "unpaid",
    },
    {
      name: "Alamin Sheikh",
      phoneNumber: "017xxxxxxx3",
      date: "4 Feb 2023",
      catagory: "paid",
    },
  ]);
});
app.get("/api/home/tabledata/:id", (req, res) => {
  let id = req.params.id;
  let data = [
    {
      name: "Jahidul Islam Hridoy",
      phoneNumber: "017xxxxxxx1",
      date: "2 Feb 2023",
      catagory: "paid",
    },
    {
      name: "Shahriar MD. Afsinur Rahman",
      phoneNumber: "017xxxxxxx2",
      date: "3 Feb 2023",
      catagory: "unpaid",
    },
    {
      name: "MD Safwanur Rahman Sayem",
      phoneNumber: "017xxxxxxx3",
      date: "4 Feb 2023",
      catagory: "paid",
    },
    {
      name: "Jahidul Haq Araf",
      phoneNumber: "017xxxxxxx1",
      date: "2 Feb 2023",
      catagory: "paid",
    },
    {
      name: "Shahriar Taukir Mithun",
      phoneNumber: "017xxxxxxx2",
      date: "3 Feb 2023",
      catagory: "unpaid",
    },
    {
      name: "Tanvir Ahmed Tonmoy",
      phoneNumber: "017xxxxxxx3",
      date: "4 Feb 2023",
      catagory: "paid",
    },
    {
      name: "Mehedi Hasan Mahim",
      phoneNumber: "017xxxxxxx1",
      date: "2 Feb 2023",
      catagory: "paid",
    },
    {
      name: "Hasan Mia",
      phoneNumber: "017xxxxxxx2",
      date: "3 Feb 2023",
      catagory: "unpaid",
    },
    {
      name: "Arif Ahmed Anik",
      phoneNumber: "017xxxxxxx3",
      date: "4 Feb 2023",
      catagory: "paid",
    },
    {
      name: "Shahriar Hossen Emon",
      phoneNumber: "017xxxxxxx1",
      date: "2 Feb 2023",
      catagory: "paid",
    },
    {
      name: "Mehedi Hasan",
      phoneNumber: "017xxxxxxx2",
      date: "3 Feb 2023",
      catagory: "unpaid",
    },
    {
      name: "Alamin Sheikh",
      phoneNumber: "017xxxxxxx3",
      date: "4 Feb 2023",
      catagory: "paid",
    },
  ];

  res.status(200).json({ data: data[id] });
});
app.listen(port_, listen_);
