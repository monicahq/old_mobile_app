type sortType =
  | 'completed_at'
  | '-completed_at'
  | 'created_at'
  | '-created_at'
  | 'updated_at'
  | '-updated_at';

export class Tasks {
  private api;

  constructor(api) {
    this.api = api;
  }

  public async getAllByContact(
    contactId: number,
    page: number,
    limit: number = 20,
    sort: sortType = 'completed_at'
  ) {
    try {
      const resp = await this.api.get('/api/contacts/' + contactId + '/tasks', {
        body: {sort, page, limit},
      });
      return resp.body;
    } catch (err) {
      throw err;
    }
  }
}
