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

    it("sets the correct start point", function() {
      range.set("end", 2);
      setTimeout(function() {
        expect(range_list.last().get("start")).toEqual(3);
      }, 0);
    });

    it("always has one item", function() {
      range_list.safeRemove(0);
      expect(range_list.length).toEqual(1);
    });

  });

  describe("when with two items", function () {
    var range_list;
    var range = new Range;

    beforeEach(function() {
      range_list = new RangeList([ range ]);
      range.set("end",2);
    });

    it("adjusts the previous item correctly when removing the last range",
      function() {
      range_list.safeRemove(1);
      expect(range_list.first().get("end")).toEqual(9999);
    });

  });
});
