import { BindingtwowayPage } from './app.po';

describe('bindingtwoway App', () => {
  let page: BindingtwowayPage;

  beforeEach(() => {
    page = new BindingtwowayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
