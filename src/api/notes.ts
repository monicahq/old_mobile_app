import {INote} from '@models';

export class Notes {
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
      const resp = await this.api.get(`/api/contacts/${contactId}/notes`, {
        body: {page, limit},
      });
      return resp.body;
    } catch (err) {
      throw err;
    }
  }

  public async update(note: INote) {
    try {
      const resp = await this.api.put(`/api/notes/${note.id}`, {
        body: {...note, contact_id: note.contact.id},
      });
      if (resp.body.error) {
        throw resp.body.error;
      }
      return resp.body;
    } catch (err) {
      throw err;
    }
  }
}
