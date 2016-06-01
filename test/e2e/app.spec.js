describe("app", function() {
  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("toDoApp");
  });
  it("should have the content hello world", function() {
    browser.get('/');
    expect($$("p").first().getText()).toEqual("hello world");
  });
});
