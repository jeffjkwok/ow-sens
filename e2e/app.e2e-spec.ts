import { OwSensPage } from './app.po';

describe('ow-sens App', () => {
  let page: OwSensPage;

  beforeEach(() => {
    page = new OwSensPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
