import { Angular2WeatherAppPage } from './app.po';

describe('angular2-weather-app App', () => {
  let page: Angular2WeatherAppPage;

  beforeEach(() => {
    page = new Angular2WeatherAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
