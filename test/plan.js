describe("Plan", function() {
  it("begins with one range", function() {
    expect(new Plan().get("ranges").length).toEqual(1);
  });
});
