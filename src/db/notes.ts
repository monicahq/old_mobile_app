import {INote} from '@models';
import {Database} from './index';

export class Notes {
  public static getByContact = (contactId: number) => next => {
    const get = () => {
      Database.db
        .query('notes/byContact', {
          startkey: [contactId, {}],
          endkey: [contactId],
          descending: true,
          include_docs: true,
        })
        .then(res => {
          next(res.rows.map(row => row.doc));
        });
    };

    get();
    const changes = Database.db
      .changes({
        since: 'now',
        live: true,
        filter: '_view',
        view: 'notes/byContact',
        include_docs: true,
      })
      .on('change', change => {
        if ((change.doc as any).contact_id === contactId) {
          // todo
          get();
        }
      });

    return changes;
  };
}
