export class Contacts {
  constructor(api) {
    this.api = api;
  }

  async getAll(page, limit = 20) {
    try {
      const resp = await this.api.get('/api/contacts', {
        body: {page, limit},
      });
      return resp.body;
    } catch (err) {
      throw err;
    }
  }

  async search(query, page, limit = 20) {
    try {
      const resp = await this.api.post(
        '/api/contacts/search?query=' + encodeURIComponent(query),
        {
          body: {page, limit},
        },
      );
      return resp.body;
    } catch (err) {
      throw err;
    }
  }
}
