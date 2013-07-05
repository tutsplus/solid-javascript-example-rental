describe("HourRange", function() {
  it("has an end of 24", function () {
    expect(new HourRange().get("end")).toEqual(24);
  });
});
