import sinon from 'sinon';
import { MarvelAPIService } from '../../../src/js/services/marvel-api';

describe('Marvel API Service', () => {
  let sandbox;
  let mockStore;
  let mockConfig;
  let apiResponse;
  let apiService;
  let fetchStub;
  let setDataStub;
  let setErrorStub;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    setDataStub = sandbox.stub();
    setErrorStub = sandbox.stub();

    mockStore = {
      setData: setDataStub,
      setError: setErrorStub
    };

    mockConfig = {
      url: '/comics/api',
      privateKey: 'privateKey',
      publicKey: 'publicKey'
    };

    apiResponse = {
      json: () => {
        return new Promise((resolve, reject) => {
          resolve([{ foo: 'bar' }]);
        });
      }
    };

    fetchStub = sinon.stub(global, 'fetch');
    fetchStub.returns(new Promise((resolve, reject) => {
      resolve(apiResponse);
    }));

    apiService = new MarvelAPIService(mockStore, mockConfig);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('sets store after fetching data', () => {
    apiService.fetchData().then(() => {
      return expect(setDataStub).to.be.calledOnce;
    });
  });
});
