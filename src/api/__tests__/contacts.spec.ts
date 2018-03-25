import {Contacts} from '../contacts';

describe('API', () => {
  describe('Contacts', () => {
    let api;
    let service: Contacts;

    beforeEach(() => {
      api = {
        get: jest.fn(),
      };
      service = new Contacts(api);
    });

    it('getAll api call', async () => {
      api.get.mockReturnValueOnce(Promise.resolve({}));

      const page = 0;
      const limit = 20;
      await service.getAll(page, limit);
      expect(api.get.mock.calls.length).toBe(1);
      expect(api.get.mock.calls[0]).toEqual([
        '/api/contacts?with=contactfields',
        {body: {page, limit}},
      ]);
    });

    it('getAll success', async () => {
      const body = {res: 'res'};
      api.get.mockReturnValueOnce(Promise.resolve({body}));

      const resp = await service.getAll(0, 20);
      expect(resp).toEqual(body);
    });

    it('getAll failure', async () => {
      const error = new Error();
      api.get.mockReturnValueOnce(Promise.reject(error));

      try {
        await service.getAll(0, 20);
        expect(false).toBe(true);
      } catch (e) {
        expect(e).toBe(error);
      }
    });
  });
});
