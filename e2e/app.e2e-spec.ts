import { ThekibaPage } from './app.po';

describe('thekiba App', function() {
  let page: ThekibaPage;

  beforeEach(() => {
    page = new ThekibaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
