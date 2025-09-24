require('dotenv').config({ path: __dirname + '/../.env' });
 const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing =require("../models/listing.js");


const MONGO_URL=process.env.ATLASDB_URL;
main()
.then((data)=>{
    console.log(data);
})
.catch((err) =>{ console.log(err)});

async function main() {
  await mongoose.connect(MONGO_URL);
 console.log("database ")
  
}


const initDb = async ()=>{
    await Listing.deleteMany({});
   initData.data = initData.data.map((obj) => ({...obj, owner: "672339f289fbb31c77cf0549"}));
    await Listing.insertMany(initData.data);
    console.log(" successfully data was insert");


};

initDb();




// require("dotenv").config();
// const mongoose = require("mongoose");
// const initData = require("./data.js");
// const Listing = require("../models/listing.js");

// const MONGO_URL = process.env.ATLASDB_URL;

// async function main() {
//   try {
//     await mongoose.connect(MONGO_URL);
//     console.log("Database connected");

//     await initDb();
//     console.log("Data inserted successfully");

//     mongoose.disconnect();
//   } catch (err) {
//     console.error("Error connecting to DB:", err);
//   }
// }

// const initDb = async () => {
//   await Listing.deleteMany({});
//   initData.data = initData.data.map((obj) => ({...obj, owner: "672339f289fbb31c77cf0549"}));
//   await Listing.insertMany(initData.data);
// };

// main();



// require('dotenv').config({ path: __dirname + '/../.env' });


// const mongoose = require("mongoose");
// const initData = require("./data.js");
// const Listing = require("../models/listing.js");

// const MONGO_URL =process.env.ATLASDB_URL; 


// // Debug: check if URI is loaded
// if (!MONGO_URL) {
//   console.error("MongoDB URI is undefined. Please check your .env file.");
//   process.exit(1); // Stop execution
// }

// async function initDb() {
//   try {
//     // Clear existing listings
//     await Listing.deleteMany({});

//     // Add owner field to each data object
//     const dataWithOwner = initData.data.map((obj) => ({
//       ...obj,
//       owner: "672339f289fbb31c77cf0549",
//     }));

//     // Insert data
//     await Listing.insertMany(dataWithOwner);
//     console.log("Data inserted successfully");
//   } catch (err) {
//     console.error("Error inserting data:", err);
//   }
// }

// async function main() {
//   try {
//     console.log("MONGO_URL:", process.env.ATLASDB_URL);

//     // Connect to MongoDB
//     await mongoose.connect(MONGO_URL);
//     console.log("Database connected");

//     // Initialize database
//     await initDb();
//   } catch (err) {
//     console.error("Error connecting to DB:", err);
//   } finally {
//     // Disconnect from MongoDB
//     await mongoose.disconnect();
//     console.log("Database disconnected");
//   }
// }

// main();
