'use strict';
const path = require('path');
const expect = require('chai').expect;
// http://chaijs.com/api/bdd/
const { boilerplate, component } = require('../lib');
describe('lib.test.js', () => {
  before(() => {
  });

  after(() => {
  });

  beforeEach(() => {
  });

  afterEach(() => {
  });

  describe('#expect lib test', () => {
    it('should api test', () => {
      expect(!!boilerplate).to.be.true;
      expect(!!component).to.be.true;
      expect(boilerplate).to.include.all.keys(['boilerplateChoice', 'boilerplateDetailChoice', 'projectAskChoice']);
      expect(component).to.include.all.keys(['componentAllChoice']);
    });
  });
});