import chai, { expect } from 'chai';
import { getCity, getTempo } from '../src/tempo';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
sinonStubPromise(sinon);

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Tempo', () => {
  let stubedFetch;
  let promise;

  beforeEach( () => {
    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.returnsPromise();
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('smoke tests', () => {

    it('should have getAlbum method', () => {
      expect(getCity).to.exist;
    });

    it('should have getAlbumTracks method', () => {
      expect(getTempo).to.exist;
    });
  });

  describe('getCity', () => {
    it('should call fetch method', () => {
      const city = getCity();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the corret URL', () => {
      const city = getCity(['3421319,3445709,184745']);
      expect(stubedFetch).to.have.been
        .calledWith('http://api.openweathermap.org/data/2.5/group?id=3421319,3445709,184745&mode=json&units=metric&appid=a0bf404919f7603c5bde4b4291c5a1c3');

    });

    it('should return the correct data from Promise', () => {
      promise.resolves({ city: 'name' });
      const city = getCity(['3421319,3445709,184745']);
      expect(city.resolveValue).to.be.eql({ city: 'name' });
    });


  });
});
