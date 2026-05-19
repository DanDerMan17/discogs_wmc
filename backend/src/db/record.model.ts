import mongoose from "mongoose";
import { Genre } from "../models/enums";

const recordSchema = new mongoose.Schema({
    title: String,
    artist: String,
    year: Number,
    genre: { // Genre allein geht nicht !!!!
        type: String,
        enum: Object.values(Genre),
        required: true
    },
    coverUrl: String,
});

export const RecordModel = mongoose.model('Record', recordSchema);