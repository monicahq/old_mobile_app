import base64 from 'base-64';

export class User {
  private api;

  constructor(api) {
    this.api = api;
  }

  public async login(email: string, password: string) {
    try {
      const resp = await this.api.post('/oauth/login', {
        body: {
          username: email,
          password,
        },
      });
      return resp.body;
    } catch (err) {
      throw err;
    }
  }
}
