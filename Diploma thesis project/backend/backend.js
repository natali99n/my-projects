import { elevationPost, elevationGet, elevationGetOne, updateElevation, deleteElevation } from "./routes/elevation_chart.js"
import { pressurePost, pressureGet, pressureGetOne, updatePressure, deletePressure } from "./routes/pressure_relief.js"
import { childCarePost, childCareGet, childCareGetOne, updateChildCare, deleteChildCare } from "./routes/child_daily_care.js"
import { checklistPost, checklistGet } from "./routes/paediatric_chekclist.js"
import { mapPost, mapGet, deleteMap, mapGetOne } from "./routes/body_map.js"
import { dataPost, dataGet } from "./routes/dashboard.js"
import express from "express";
import mongoose from "mongoose";
import keys from "./keys/keys.js";
import cors from "cors";
import router from "./routes/login.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();


app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(express.static('public'));
app.use(cookieParser());
app.use(express.json());


//dbs connect
mongoose
  .connect(keys.mongodb.dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected To MongoDB'))
  .catch((err) => console.log('No Connect To MongoDB', err));

const db = mongoose.connection


app.get('/elevation-chart', elevationGet);
app.get('/elevation-chart/:id', elevationGetOne);
app.post('/elevation-chart-new', elevationPost);
app.patch('/elevation-chart/edit/:id', updateElevation);
app.delete('/elevation-chart/:id', deleteElevation);

app.get('/pressure-relief', pressureGet);
app.get('/pressure-relief/:id', pressureGetOne);
app.post('/pressure-relief-new', pressurePost);
app.patch('/pressure-relief/edit/:id', updatePressure);
app.delete('/pressure-relief/:id', deletePressure);

app.get('/child-care', childCareGet);
app.get('/child-care/:id', childCareGetOne);
app.post('/child-care-new', childCarePost);
app.patch('/child-care/edit/:id', updateChildCare);
app.delete('/child-care/:id', deleteChildCare);

app.get('/paediatric-checklist', checklistGet);
app.post('/paediatric-checklist-new', checklistPost);

app.get('/body-map', mapGet);
app.post('/body-map-new', mapPost);
app.get('/body-map/:id', mapGetOne);
app.delete('/body-map/:id', deleteMap);

app.get('/dashboard', dataGet);
app.post('/dashboard-new', dataPost);

app.use(router);

//wrong route
// app.get("*", function (req, res) {
//     res.sendFile(__dirname + "/pages/error.html")
// })

//run app
var PORT = process.env.PORT || 8000
app.listen(PORT, function () {
    console.log(`The Server Has Started On Port ${PORT} !`)
})
