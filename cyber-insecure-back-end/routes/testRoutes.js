import express from 'express';
const testRouter = express.Router();
import pairsOfIntegers from '../models/testModel.js';

testRouter.get("/", async (req, res) => {
    const matchingPairs = await pairsOfIntegers(req.body.array, req.body.sum);
    console.log(matchingPairs)
    return res.json({ success: true, payload: matchingPairs });
})

export default testRouter;
