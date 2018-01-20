import base64 from 'base-64';

export class User {
  constructor(api) {
    this.api = api;
  }

  async login(email, password) {
    try {
      const resp = await this.api.post('/oauth/token', {
        body: {
          grant_type: 'password',
          client_id: '3',
          client_secret: base64.decode(
            'MFRITXAyRGVYeVVkaEd5ME9lckZMRFBWam9PVVhEMzdPdVhVdG94Sw',
          ),
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
