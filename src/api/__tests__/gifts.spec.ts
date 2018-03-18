import {Gifts} from '../gifts';

describe('API', () => {
  describe('Gifts', () => {
    let api;
    let service: Gifts;

    beforeEach(() => {
      api = {
        get: jest.fn(),
      };
      service = new Gifts(api);
    });

    it('getAllByContact api call', async () => {
      api.get.mockReturnValueOnce(Promise.resolve({}));
      const contactId = 3;
      const page = 0;
      const limit = 20;
      await service.getAllByContact(contactId, page, limit);
      expect(api.get.mock.calls.length).toBe(1);
      expect(api.get.mock.calls[0]).toEqual([
        '/api/contacts/' + contactId + '/gifts',
        {body: {page, limit}},
      ]);
    });

    it('getgetAllByContactAll success', async () => {
      const body = {res: 'res'};
      api.get.mockReturnValueOnce(Promise.resolve({body}));

      const resp = await service.getAllByContact(3, 0, 20);
      expect(resp).toEqual(body);
    });

    it('getAllByContact failure', async () => {
      const error = new Error();
      api.get.mockReturnValueOnce(Promise.reject(error));

      try {
        await service.getAllByContact(3, 0, 20);
        expect(false).toBe(true);
      } catch (e) {
        expect(e).toBe(error);
      }
    });
  });
});
