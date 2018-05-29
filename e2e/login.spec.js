describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  
  // it('should have welcome screen', async () => {
  //   await expect(element(by.id('email'))).toBeVisible();
  // });
  
  it('should show hello screen after tap', async () => {
    await element(by.id('goToLogin')).tap();


    await element(by.id('email')).typeText('admin@admin.com');
    await element(by.id('password')).typeText('adminadmin');
    await element(by.id('url')).clearText();
    await element(by.id('url')).typeText('https://staging.monicahq.com');
    await element(by.id('submit')).tap();

    // await expect(element(by.text('Hello!!!'))).toBeVisible();
  });
  
  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
})
