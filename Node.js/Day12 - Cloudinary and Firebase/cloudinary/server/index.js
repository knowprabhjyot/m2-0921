const express = require("express");
const app = express();
const PORT = process.env.PORT || 2000;
require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const cors = require("cors");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

app.use(cors());
app.use(express.json({ limit: "50mb"}));

app.get("/", (req, res) => {
  res.send("API ENDPOINT");
});


app.post("/api/v1/upload", (req, res) => {
  cloudinary.uploader.upload(req.body.image, function (error, result) {
    
        if (error) {
            return res.status(500).json({
                error: error
            })
        }

        if (result) {
            return res.status(201).json({
                data: result,
                message: "Succesfully uploaded the image"
            })
        }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
