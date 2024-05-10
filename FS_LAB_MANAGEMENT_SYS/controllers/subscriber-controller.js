const { SubscriberService } = require('../services/index');

const subscriberService = new SubscriberService();

const create = async (req, res) => {
    try {
        const subscriber = await subscriberService.createSubscriber(req.body);
        res.status(201).json({
            data: subscriber,
            success: true,
            message: 'Successfully Added a Subscriber',
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

const destroy = async (req, res) => {
    try {
        const response = await subscriberService.deleteSubscriber(req.params.id);
        res.status(200).json({
            success: true,
            message: 'Successfully deleted a subscriber',
            err: {}
        });

    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete a subscriber',
            err: error
        });
    }

}

const get = async (req, res) => {
    try {
        const response = await subscriberService.getSubscriber(req.params.id);
        if (response.length) {
            res.status(200).json({
                data: response,
                success: true,
                message: 'Successfully fetched the Subscriber',
                err: {}
            });
        }
        else {
            res.status(404).json({
                data: {},
                success: false,
                message: 'Subscriber does not Exist',
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

const update = async (req, res) => {
    try {
        const response = await subscriberService.updateSubscriber(req.params.id, req.body);
        res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully updated the subscriber',
            err: {}
        })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the subscriber',
            err: error
        });
    }
};

const getAll = async (req, res) => {
    try {
        const subscribers = await subscriberService.getAllSubscribers(req.query);
        if (subscribers.length) {
            res.status(200).json({
                data: subscribers,
                success: true,
                message: 'Successfully fetched all subscribers',
                err: {}
            });
        }
        else {
            res.status(404).json({
                data: {},
                success: false,
                message: 'Subscriber does not Exist',
                err: {}
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch subscribers',
            err: error
        });
    }
};

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}
