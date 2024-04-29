import mongoose from "mongoose";

const inputSchema = new mongoose.Schema({
    id: String,
    incidentNumber: Number,
    status: String,
    createdOn: Date,
    title: String,
    priority: Number
});

export const InputModel = mongoose.model("incidents", inputSchema);