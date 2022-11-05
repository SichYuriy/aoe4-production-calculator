import {Utils} from "./Utils";

test('Utils', () => {
    let actual = [{val: 1}, {val: 3}, {val: 2}, {val: 5}].sort(Utils.sortDescByProperty(a => a.val));
    expect(actual).toEqual([{val: 5}, {val: 3}, {val: 2}, {val: 1}]);
});