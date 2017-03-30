import { MaterialSandboxPage } from './app.po';

describe('material-sandbox App', () => {
  let page: MaterialSandboxPage;

  beforeEach(() => {
    page = new MaterialSandboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
