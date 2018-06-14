import PouchDB from 'pouchdb';
import PouchDBAuthentication from 'pouchdb-authentication';
import {AsyncStorage} from 'react-native';

PouchDB.plugin(PouchDBAuthentication);

const dbNameKey = 'dbName';
const dbUrlKey = 'dbUrl';

Promise.all([
  AsyncStorage.getItem(dbNameKey),
  AsyncStorage.getItem(dbUrlKey),
]).then(([remoteDatabaseName, remoteDatabaseUrl]) => {
  console.log(remoteDatabaseName, remoteDatabaseUrl);
  Database.setRemoteDatabase(remoteDatabaseName, remoteDatabaseUrl);
});

export class Database {
  public static db = Database.initializeLocalDatabase();
  public static login(
    user: {_id: string; database: string},
    password: string,
    databaseUrl: string
  ) {
    const userId = user._id.split(':')[1];

    AsyncStorage.setItem(dbUrlKey, databaseUrl);
    AsyncStorage.setItem(dbNameKey, user.database);
    this.setRemoteDatabase(user.database, databaseUrl);
    this.remoteDb.logIn(userId, password);
  }
  public static logout() {
    AsyncStorage.removeItem(dbNameKey);
    AsyncStorage.removeItem(dbUrlKey);
    this.remoteDb.logOut();
    this.db.destroy();
    this.db = this.initializeLocalDatabase();
    this.syncHandler.cancel();
  }

  public static setRemoteDatabase(databaseName: string, databaseUrl: string) {
    this.remoteDb = new PouchDB(`${databaseUrl}/${databaseName}`);
    this.syncHandler = this.db.sync(this.remoteDb, {
      live: true,
      retry: true,
    });

    this.syncHandler.catch((e: Error) => {
      if (e.name === 'unauthorized') {
        console.log('SHOULD BE LOGGED OUT'); // TODO
      }
    });
  }
  public static initializeLocalDatabase() {
    return new PouchDB('mydbqwdqwdqwdqwdqwqwdqwdqwddqwdqdwqwd', {
      auto_compaction: true,
    });
  }

  private static url;
  private static syncHandler;
  private static remoteDb;
}
