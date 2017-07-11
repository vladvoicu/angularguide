import { RecipeProjectPage } from './app.po';

describe('recipe-project App', () => {
  let page: RecipeProjectPage;

  beforeEach(() => {
    page = new RecipeProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
