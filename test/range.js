describe("Range", function() {
  it("has a start", function () {
    expect(new Range().get("start")).toEqual(1);
  });

  it("has an end", function () {
    expect(new Range().get("end")).toEqual(9999);
  });

});
