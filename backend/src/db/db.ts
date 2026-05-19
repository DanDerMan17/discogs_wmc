import mongoose from "mongoose";
import {RecordModel} from "./record.model";
import {mockRecords} from "../data/mock.records";



export async function connectDB() {
    await mongoose.connect("mongodb://localhost:27018/record");
    console.log("Mongo connected! Success!");
}

export async function initDB() {
    const count = await RecordModel.countDocuments();

    if (count === 0) {
        await RecordModel.insertMany(mockRecords);
        console.log("Data imported from JSON")
    } else {
        console.log("DB already initialized!")
    }
}