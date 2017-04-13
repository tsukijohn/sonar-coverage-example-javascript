'use strict';

const assert = require('chai').assert;
const expect = require('chai').expect;
const sinon = require('sinon');

describe('index test', () => {
    let instance;
    let NotificationBase;

    beforeEach(() => {
        if (this.sinon == null) {
            this.sinon = sinon.sandbox.create();
        } else {
            this.sinon.restore();
        }
        this.sinon.stub(console, 'error');
        // eslint-disable-next-line global-require
        NotificationBase = require('../index');
        instance = new NotificationBase({});
    });

    afterEach(() => {
        instance = null;
    });

    it('can create an notification base class instance', () => {
        assert.instanceOf(instance, NotificationBase);
    });

    it('should get events', () => {
        assert.deepEqual(instance.events, ['build_status']);
    });

    it('should catch an error', () => {
        instance.notify({});
        // eslint-disable-next-line
        expect(console.error.calledOnce).to.be.true;
    });
});
