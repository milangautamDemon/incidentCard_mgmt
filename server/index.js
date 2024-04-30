import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {InputModel} from "./models/inputModel.js";

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/incident_management")
.then(() => console.log('Database connected successfully'))
 .catch(err => console.error('Database connection error:', err));


app.get("/api/getDatas", async (req, res) => {
    try{    
        const datas = await InputModel.find();
        res.json(datas);
        console.log("Datas display successfully", datas);
    }
    catch (error){
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
})


app.post("/api/submitDatas", async (req, res) => {
    try{    
        const { 
            id,   
            incidentNumber,
            status,
            createdOn,
            title,
            priority
        } = req.body;

        const newInputs = new InputModel({
            id,
            incidentNumber,
            status,
            createdOn,
            title,
            priority
        });

        await newInputs.save();
        res.status(201).json(newInputs);
    }
    catch(error){
        console.error("error receiving data:", error);
        res.status(500).json({error: "internal server error"});
    }
});

app.delete("/api/deleteDatas", async (req, res) => {
    try{    
        const { id } = req.body;

        if (!id) {
            return res.status(400).send('ID is required');
        }

        const result = await InputModel.deleteOne({ id });

        if (!result) {
            return res.status(404).send('Document not found');
        }
        res.json(result);
        console.log("Data deleted successfully");
    }
    catch (error){
        console.error('Error deleting data:', error);
        res.status(500).send('Internal Server Error');
    }
})
// const PORT = process.env.PORT || 5001;
app.listen(5001, () => console.log("user listen at port 5001"));