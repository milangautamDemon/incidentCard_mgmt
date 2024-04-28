import mongoose from "mongoose";

const inputSchema = new mongoose.Schema({
    incidentNumber: Number,
    status: String,
    createdOn: Date,
    title: String,
    priority: Number
});

export const InputModel = mongoose.model("incidents", inputSchema);