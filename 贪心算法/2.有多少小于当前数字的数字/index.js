/**
 * @param {number[]} nums
 * @return {number[]}
 * @description 给你一个数组 nums，对于其中每个元素 nums[i]，请你统计数组中比它小的所有数字的数目
 *              例：输入：nums = [8,1,2,2,3]，输出：[4,0,1,1,3]；
 * @description T(n):nlog n, S(n): n, leetcode : 1365
 * @description v8 sort数组长度不超过10时，使用插入排序。长度超过10使用快速排序。在数组较短时插入排序更有效率。
  */
const smallerNumbersThanCurrent = function(nums) {
  let n = nums.length;
  // 二位数组记录原始元素与index
  let data = new Array(n).fill(0).map(() => new Array(2).fill(0))
  for(let i = 0; i < n ; i++) {
    data[i][0] = nums[i];
    data[i][1] = i;
  }
  // 排序 （大 --> 小）
  data.sort((a, b) => b [0] - a[0] );

  /*数组已（大 --> 小）排序好，所以比最大的数，没有比它大的，所以为0，如果有一样大的数，则比他大的就少了一个 */
  let ret = new Array(n);
  let prev = -1;
  for (let i = 0; i < n; ++i) {
    if (prev == -1 || data[i][0] !== data[i - 1][0])
      prev = i;
    ret[data[i][1]] = prev;
  }

  return ret;
};
module.exports = smallerNumbersThanCurrent;
