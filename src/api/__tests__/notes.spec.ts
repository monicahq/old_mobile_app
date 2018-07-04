import {Notes} from '../notes';

describe('API', () => {
  describe('Notes', () => {
    let api;
    let service: Notes;

    beforeEach(() => {
      api = {
        get: jest.fn(),
        put: jest.fn(),
        post: jest.fn(),
      };
      service = new Notes(api);
    });

    it('getAllByContact api call', async () => {
      api.get.mockReturnValueOnce(Promise.resolve({}));
      const contactId = 3;
      const page = 0;
      const limit = 20;
      await service.getAllByContact(contactId, page, limit);
      expect(api.get.mock.calls.length).toBe(1);
      expect(api.get.mock.calls[0]).toEqual([
        '/api/contacts/' + contactId + '/notes',
        {body: {page, limit}},
      ]);
    });

    it('getAllByContactAll success', async () => {
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

    it('post api call', async () => {
      api.post.mockReturnValueOnce(Promise.resolve({body: {}}));
      const note = {body: 'test', contact: {id: 3}};
      const expected = {
        body: 'test',
        contact_id: 3,
        is_favorited: 0,
      };

      await service.post(note as any);
      expect(api.post.mock.calls.length).toBe(1);
      expect(api.post.mock.calls[0]).toEqual(['/api/notes', {body: expected}]);
    });

    it('post success', async () => {
      const body = {res: 'res'};
      api.post.mockReturnValueOnce(Promise.resolve({body}));

      const resp = await service.post({body: 'note', contact: {}} as any);
      expect(resp).toEqual(body);
    });
    it('post failed', async () => {
      const error = new Error('Test');
      api.post.mockReturnValueOnce(Promise.reject(error));

      try {
        await service.post({body: 'note', contact: {}} as any);
        expect(false).toBe(true);
      } catch (e) {
        expect(e).toBe(error);
      }
    });

    it('post api call', async () => {
      api.post.mockReturnValueOnce(Promise.resolve({body: {}}));
      const note = {body: 'test', contact: {id: 3}};
      const expected = {
        body: 'test',
        contact_id: 3,
        is_favorited: 0,
      };

      await service.post(note as any);
      expect(api.post.mock.calls.length).toBe(1);
      expect(api.post.mock.calls[0]).toEqual(['/api/notes', {body: expected}]);
    });

    it('post success', async () => {
      const body = {res: 'res'};
      api.post.mockReturnValueOnce(Promise.resolve({body}));

      const resp = await service.post({body: 'note', contact: {}} as any);
      expect(resp).toEqual(body);
    });

    it('post failed', async () => {
      const error = new Error('Test');
      api.post.mockReturnValueOnce(Promise.reject(error));

      try {
        await service.post({body: 'note', contact: {}} as any);
        expect(false).toBe(true);
      } catch (e) {
        expect(e).toBe(error);
      }
    });

    it('post failed (resolve error)', async () => {
      const error = new Error('Test');
      api.post.mockReturnValueOnce(Promise.resolve({body: {error}}));

      try {
        await service.post({body: 'note', contact: {}} as any);
        expect(false).toBe(true);
      } catch (e) {
        expect(e).toBe(error);
      }
    });

    it('update api call', async () => {
      api.put.mockReturnValueOnce(Promise.resolve({body: {}}));
      const note = {id: 3, body: 'test', contact: {id: 4}};
      const expected = {
        id: 3,
        body: 'test',
        contact_id: 4,
      };

      await service.update(note as any);
      expect(api.put.mock.calls.length).toBe(1);
      expect(api.put.mock.calls[0]).toEqual([
        `/api/notes/${note.id}`,
        {body: expected},
      ]);
    });

    it('update success', async () => {
      const body = {res: 'res'};
      api.put.mockReturnValueOnce(Promise.resolve({body}));

      const resp = await service.update({body: 'note', contact: {}} as any);
      expect(resp).toEqual(body);
    });
    it('update failed', async () => {
      const error = new Error('Test');
      api.put.mockReturnValueOnce(Promise.reject(error));

      try {
        await service.update({body: 'note', contact: {}} as any);
        expect(false).toBe(true);
      } catch (e) {
        expect(e).toBe(error);
      }
    });
    it('update failed (resolve)', async () => {
      const error = new Error('Test');
      api.put.mockReturnValueOnce(Promise.resolve({body: {error}}));

      try {
        await service.update({body: 'note', contact: {}} as any);
        expect(false).toBe(true);
      } catch (e) {
        expect(e).toBe(error);
      }
    });
  });
});
