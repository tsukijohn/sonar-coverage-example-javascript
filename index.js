'use strict';

/* eslint-disable no-underscore-dangle */
class NotificationBase {
    /**
     * Constructor for Build Notification
     * @method constructor
     * @param {Object}      config              Configuration specific to the plugin
     * @return {NotificationBase}
     */
    constructor(config) {
        this.config = config;
    }

    /**
     * Get event list for receiving Screwdriver API events
     * @getter events
     * @return {Array}
     */
    get events() {
        return ['build_status'];
    }

    /**
     * Listen to the event and notify users based on their job settings
     * @param {Object}      buildData           Build data emitted with some event from Screwdriver
     * @method notify
     */
    notify(buildData) {
        try {
            this._notify(buildData);
        } catch (e) {
            // eslint-disable-next-line no-console
            console.error(e);
        }
    }

    // eslint-disable-next-line no-unused-vars
    _notify(buildData) {
        throw new Error('Not implemented');
    }
}

module.exports = NotificationBase;
