import express from "express";

export const route = express.Router();


route.get('/', (req, res) => {
    try {
        res.send("Get info");
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
        return;
    }
})

route.post('/', (req, res)=>{
    try {
        res.send("Send info");
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
        return;
    }
})

route.put('/', (req, res) => {
    try {
        res.send("Update info");
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
        return;
    }
})

route.delete('/', (req, res) => {
    try {
        res.send(req.body.data["data"]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
        return;
    }
})

route.patch('/', (req, res) => {
    try {
        res.send("Update info")
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
        return;
    }
})
