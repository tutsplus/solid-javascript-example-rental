describe("Plan", function() {
  it("begins with one range", function() {
    expect(new Plan().ranges.length).toEqual(1);
  });
});
