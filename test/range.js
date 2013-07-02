describe("Range", function() {
  it("has a start", function () {
    expect(new Range().start).toEqual(1);
  });

  it("has an end", function () {
    expect(new Range().end).toEqual(9999);
  });
});
