export class LoginPage {
  public static async get() {
    await device.reloadReactNative();
    await element(by.id('goToLogin')).tap();
  }
}
