'use strict';

const assert = require('chai').assert;

describe('index test', () => {
    let instance;
    let NotificationBase;

    beforeEach(() => {
        // eslint-disable-next-line global-require
        NotificationBase = require('../index');

        instance = new NotificationBase({}, {}, 'build_status');
    });

    afterEach(() => {
        instance = null;
    });

    it('can create an notification base class instance', () => {
        assert.instanceOf(instance, NotificationBase);
    });

    describe('notify', () => {
        it('returns not implemented', () =>
            instance.notify()
                .then(() => {
                    assert.fail('you will never get dis');
                })
                .catch((err) => {
                    assert.equal(err, 'Not implemented');
                })
        );
    });
});
