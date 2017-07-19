import { OnlinePage } from './app.po';

describe('online App', () => {
  let page: OnlinePage;

  beforeEach(() => {
    page = new OnlinePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
