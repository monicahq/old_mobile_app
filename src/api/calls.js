export class Calls {
  constructor(api) {
    this.api = api;
  }

  async getAllByContact(contactId, page, limit = 20) {
    try {
      const resp = await this.api.get('/api/contacts/' + contactId + '/calls', {
        body: {page, limit},
      });
      return resp.body;
    } catch (err) {
      throw err;
    }
  }
}
