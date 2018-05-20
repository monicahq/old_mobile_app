export class User {
  private api;

  constructor(api) {
    this.api = api;
  }

  public async login(email: string, password: string) {
    try {
      const resp = await this.api.post('/oauth/login', {
        body: {
          email,
          password,
        },
      });
      return resp.body;
    } catch (err) {
      throw err;
    }
  }
}
