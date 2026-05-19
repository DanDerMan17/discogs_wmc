import express from "express";
import {RecordModel} from "../db/record.model";


const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const records = await RecordModel.find();

        if (records.length == 0) {
            return res.status(404).send("No records found.");
        }

        res.status(200).json(records);
    } catch (err) {
        res.status(500);
    }
})

export default router;