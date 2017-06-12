import { DynformPage } from './app.po';

describe('dynform App', () => {
  let page: DynformPage;

  beforeEach(() => {
    page = new DynformPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
