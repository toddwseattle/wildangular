import { WildAngPage } from './app.po';

describe('wild-ang App', () => {
  let page: WildAngPage;

  beforeEach(() => {
    page = new WildAngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
