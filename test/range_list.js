describe("RangeList", function() {
  describe("when with a single item", function() {
    var range_list;
    var range;

    beforeEach(function() {
      range = new Range;
      range_list = new RangeList([ range ]);
    });

    it("adds a new item when the range changes", function() {
      range.set("end", 2);
      expect(range_list.length).toEqual(2);
    });

    it("sets the correct start point", function() {
      range.set("end", 2);
      expect(range_list.last().get("start")).toEqual(3);
    });

    it("always has one item", function() {
      range_list.safeRemove(range_list.first());
      expect(range_list.length).toEqual(1);
    });

  });

  describe("when with two items", function () {
    var range_list, range;

    beforeEach(function() {
      range = new Range;
      range_list = new RangeList([ range ]);
      range.set("end",2);
    });

    it("adjusts the previous item correctly when removing the last range",
      function() {
      range_list.safeRemove(range_list.last());
      expect(range_list.first().get("end")).toEqual(9999);
    });

    it("actually removes the last range",
      function() {
      range_list.safeRemove(range_list.last());
      expect(range_list.length).toEqual(1);
    });

  });

});
