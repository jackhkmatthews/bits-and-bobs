import { AngularRxjsNgrxStorePage } from './app.po';

describe('angular-rxjs-ngrx-store App', () => {
  let page: AngularRxjsNgrxStorePage;

  beforeEach(() => {
    page = new AngularRxjsNgrxStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
