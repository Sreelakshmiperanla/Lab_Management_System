const { resourceUsage } = require("process");
const { Subscriber } = require("../models/index");
const { Op } = require("sequelize");
const sequelize = require('sequelize');

class SubscriberRepository {
    //Using Raw SQL Query for inserting a row operation with Sequelize
    async createSubscriber({ name, email, mobile }) {
        try {
            const subscriber = await Subscriber.create({
                name: name,
                email: email,
                mobile: mobile
            });
            return subscriber;
        }
        catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async getSubscriber(subscriberId) {
        //Writing Raw SQL Query using sequelize for getting a Subscriber
        try {
            const query = `select * from Subscribers where id = :id`;
            const subscriber = await Subscriber.sequelize.query(query, {
                replacements: {
                    id: subscriberId
                },
                type: sequelize.QueryTypes.SELECT
            })
            return subscriber;

        }
        catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
    
    

    async updateSubscriber(subscriberId, data) {
        try {
            let subscriber = await Subscriber.update(data, {
                where: {
                    id: subscriberId
                }
            });
            subscriber = await Subscriber.findByPk(subscriberId);
            if (data.name) {
                subscriber.name = data.name
            }
            if (data.email) {
                subscriber.email = data.email;
            }
            if (data.mobile) {
                subscriber.mobile = data.mobile
            }

            return subscriber;
        }
        catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async deleteSubscriber(subscriberId) {
        try {
            const subscriber = await Subscriber.destroy({
                where: {
                    id: subscriberId
                }
            });
            return subscriber;

        }
        catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async getAllSubscribers(filter) {
        try {
            if (filter.name) {
                const subscribers = await Subscriber.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return subscribers;
            }
            const subscribers = await Subscriber.findAll();
            return subscribers;
        }
        catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
}

module.exports = SubscriberRepository;