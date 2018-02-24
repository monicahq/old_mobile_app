export class Gifts {
  constructor(api) {
    this.api = api;
  }

  async getAllByContact(contactId, page, limit = 20) {
    try {
      const resp = await this.api.get('/api/contacts/' + contactId + '/gifts', {
        body: {page, limit},
      });
      return resp.body;
    } catch (err) {
      throw err;
    }
  }
}
