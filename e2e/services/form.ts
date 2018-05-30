import {I18n} from '../i18n';

export class Form {
  public static async checkRequired(formName: string) {
    const error = this.getInputError(formName);
    const input = this.getInput(formName);

    await expect(error).toBeNotVisible();
    await input.tap();
    await input.clearText();
    await this.clickAnywhere();
    await expect(error).toHaveText(I18n.t('common:form.required'));
  }

  public static async checkIsValid(formName: string, value: string) {
    const error = this.getInputError(formName);
    const input = this.getInput(formName);

    await expect(error).toBeNotVisible();
    await input.tap();
    await input.clearText();
    await input.typeText(value);
    await this.clickAnywhere();
    await expect(error).toBeNotVisible();
  }

  public static async checkIsNotValid(
    formName: string,
    value: string,
    errorExpected: string
  ) {
    const error = this.getInputError(formName);
    const input = this.getInput(formName);

    await expect(error).toBeNotVisible();
    await input.tap();
    await input.clearText();
    await input.typeText(value);
    await this.clickAnywhere();
    await expect(error).toHaveText(I18n.t(errorExpected));
  }

  public static async setValue(formName: string, value: string) {
    const input = this.getInput(formName);

    await this.clickAnywhere();
    await input.tap();
    await input.clearText();
    await input.typeText(value);
  }

  public static async submit() {
    await this.clickAnywhere();
    await this.getSubmitButton().tap();
  }

  public static async checkFormResult(error: string) {
    await this.scrollToBottom();
    await expect(this.getFormResult()).toHaveText(I18n.t(error));
  }

  private static async scrollToBottom() {
    await element(by.type('RCTView'))
      .atIndex(0)
      .scrollTo('bottom');
  }

  private static getInput(formName) {
    return element(by.id(`input-${formName}`));
  }
  private static getInputError(formName) {
    return element(by.id(`input-error-${formName}`));
  }
  private static getSubmitButton() {
    return element(by.id('submit'));
  }
  private static getFormResult() {
    return element(by.id('formResult'));
  }

  private static async clickAnywhere() {
    await element(by.type('RCTView'))
      .atIndex(0)
      .tapAtPoint({x: 0, y: 0});
  }
}
