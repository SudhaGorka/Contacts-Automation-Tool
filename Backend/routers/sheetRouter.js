const express = require('express');
const router = express.Router();
const Model = require("../models/sheetModel")

router.post("/add", (req, res) => {

    console.log(req.body);
    // storing data in database
    new Model(req.body).save()
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//create-post, read-get, update-put, 
router.get('/getall', (req, res) => {
    Model.find({})
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
})
// ':' denotes a parameter
router.get('/getbyuser/:userid', (req, res) => {
    Model.find({ user: req.params.userid })
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
})    // we can shortcut this name also(getbyusername)

router.get('/getbyid/:userid', (req, res) => {
    Model.findById(req.params.userid)
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
})

router.delete('/delete/:userid', (req, res) => {
    Model.findByIdAndDelete(req.params.userid)
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
})

router.put('/update/:userid', (req, res) => {
    Model.findByIdAndUpdate(req.params.userid, req.body)
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
})

router.post('/authenticate', (req, res) => {
    const formdata = req.body;
    Model.findOne({ username: formdata.username, email: formdata.email, password: formdata.password, age: formdata.age })

        .then((result) => {
            if (result) {
                res.status(201).json(result);
            } else {
                res.status(401).json(result);
            }
        }).catch((err) => {
            res.status(500).json(err);
        });
})

module.exports = router;