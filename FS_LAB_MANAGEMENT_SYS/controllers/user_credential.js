const { Credential } = require("../models/index");


const create = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(req.body);
        const subscriber = await Credential.create({
            name: name,
            emailId: email,
            password: password
        });
        res.status(201).json({
            data: subscriber,
            success: true,
            message: 'Successfully Registered a Subscriber',
            err: {}
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to Add a Subscriber',
            err: error
        });
    }

}


const get = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body);
        const response = await Credential.findOne({
            where: {
                emailId: email,
                password: password
            }
        });


        if (response) {
            res.status(200).json({
                data: response,
                success: true,
                message: 'Successfully fetched the Subscriber',
                err: {}
            });
        }
        else {
            res.status(404).json({
                data: response,
                success: true,
                message: 'Subscriber does not exist',
                err: {}
            });
        }

    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the Subscriber',
            err: error
        });
    }

}



module.exports = {
    create,
    get
};
