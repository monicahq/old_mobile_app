import {User} from '../user';

describe('API', () => {
  describe('User', () => {
    let api;
    let service: User;

    beforeEach(() => {
      api = {
        post: jest.fn(),
      };
      service = new User(api);
    });

    it('login api call', async () => {
      api.post.mockReturnValueOnce(Promise.resolve({}));

      const email = 'email';
      const password = 'pass';
      await service.login(email, password);
      expect(api.post.mock.calls.length).toBe(1);

      const call = api.post.mock.calls[0];
      expect(call[0]).toBe('/oauth/login');
      expect(call[1].body.email).toBe(email);
      expect(call[1].body.password).toBe(password);
    });

    it('login success', async () => {
      const body = {res: 'res'};
      api.post.mockReturnValueOnce(Promise.resolve({body}));

      const resp = await service.login('0', '0');
      expect(resp).toEqual(body);
    });

    it('login failure', async () => {
      const error = new Error();
      api.post.mockReturnValueOnce(Promise.reject(error));

      try {
        await service.login('0', '0');
        expect(false).toBe(true);
      } catch (e) {
        expect(e).toBe(error);
      }
    });
  });
});
