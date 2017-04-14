import { SaraPage } from './app.po';

describe('sara App', () => {
  let page: SaraPage;

  beforeEach(() => {
    page = new SaraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
