import { BlinPage } from './app.po';

describe('blin App', () => {
  let page: BlinPage;

  beforeEach(() => {
    page = new BlinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
