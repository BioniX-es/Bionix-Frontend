import { BionixFrontendPage } from "./app.po";

describe("bionix-frontend App", () => {
  let page: BionixFrontendPage;

  beforeEach(() => {
    page = new BionixFrontendPage();
  });

  it("should display message saying app works", () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual("app works!");
  });
});
