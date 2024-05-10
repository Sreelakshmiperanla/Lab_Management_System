const { SubscriberRepository } = require('../repository/index');

class SubscriberService {
    constructor() {
        this.subscriberRepository = new SubscriberRepository();
    }

    async createSubscriber(subscriber) {
        try {
            const Subscriber = await this.subscriberRepository.createSubscriber(subscriber);
            return Subscriber;
        }
        catch (error) {
            console.log("Something went wrong at service layer");
            throw error;
        }
    }

    async deleteSubscriber(subscriberId) {
        try {
            const response = await this.subscriberRepository.deleteSubscriber(subscriberId);
            return response;
        }
        catch (error) {
            console.log("Something went wrong at service layer");
            throw error;
        }
    }

    async updateSubscriber(subscriberId, data) {
        try {
            const Subscriber = await this.subscriberRepository.updateSubscriber(subscriberId, data);
            return Subscriber;
        }
        catch (error) {
            console.log("Something went wrong at service layer");
            throw error;
        }
    }

    async getSubscriber(subscriberId) {
        try {
            const Subscriber = await this.subscriberRepository.getSubscriber(subscriberId);
            return Subscriber;
        }
        catch (error) {
            console.log("Something went wrong at service layer");
            throw error;
        }
    }

    async getAllSubscribers(filter){
        try {
            const subscribers = await this.subscriberRepository.getAllSubscribers({name: filter.name});
            return subscribers;
        }
        catch (error) {
            console.log("Something went wrong at service layer");
            throw error;
        }
    }
}

module.exports = SubscriberService;