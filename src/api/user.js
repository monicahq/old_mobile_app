export class User {
  constructor(api) {
    this.api = api;
  }

  async login(email, password) {
    try {
      const resp = await this.api.post('/login', {
        body: {email, password},
      });
      return resp.body;
    } catch (err) {
      throw err;
    }
  }
}
