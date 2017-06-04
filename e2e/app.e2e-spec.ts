import { CommonsJavaDocsPage } from './app.po';

describe('commons-java-docs App', () => {
  let page: CommonsJavaDocsPage;

  beforeEach(() => {
    page = new CommonsJavaDocsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
