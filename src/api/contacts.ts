export class Contacts {
  private api;

  constructor(api) {
    this.api = api;
  }

  public async getAll(page: number, limit: number = 20, query?: string) {
    try {
      const resp = await this.api.get('/api/contacts?with=contactfields', {
        body: {page, limit, query},
      });
      return resp.body;
    } catch (err) {
      throw err;
    }
  }
}
