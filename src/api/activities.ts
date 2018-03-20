export class Activities {
  private api;

  constructor(api) {
    this.api = api;
  }

  public async getAllByContact(
    contactId: number,
    page: number,
    limit: number = 20
  ) {
    try {
      const resp = await this.api.get(
        '/api/contacts/' + contactId + '/activities',
        {
          body: {page, limit},
        }
      );
      return resp.body;
    } catch (err) {
      throw err;
    }
  }
}
