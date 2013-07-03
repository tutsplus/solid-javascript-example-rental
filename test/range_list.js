describe("RangeList", function() {
  describe("when with a single item", function() {
    var range_list;
    var range = new Range;

    beforeEach(function() {
      range_list = new RangeList([ range ]);
    });

    it("adds a new item when the range changes", function() {
      range.set("end", 2);
      expect(range_list.length).toEqual(2);
    });
  });
});
