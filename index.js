'use strict';

/* eslint-disable no-underscore-dangle */
class NotificationBase {

    /**
     * Constructor for Build Notification
     * @method constructor
     * @param {Object}      config              Configuration specific to the plugin
     * @param {Object}      server              API server
     * @param {String}      eventName           Event name the notification plugin listen to
     * @return {NotificationBase}
     */
    constructor(config, server, eventName) {
        this.config = config;
        this.server = server;
        this.eventName = eventName;
    }

    /**
     * Listen to the event and notify users based on their job settings
     * @method notify
     * @return {Promise}
     */
    notify() {
        return this._notify();
    }

    _notify() {
        return Promise.reject('Not implemented');
    }
}

module.exports = NotificationBase;
