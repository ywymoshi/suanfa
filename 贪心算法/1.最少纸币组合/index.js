/**
 *
 * @param money
 * @return {number}
 *
 * @description 小明手中有 1，5，10，50，100 五种面额的纸币，
 * 每种纸币对应张数分别为 5，2，2，3，5 张。
 * 若小明需要支付 456 元，则需要多少张纸币？
 *
 * @description  leetcode : null
 * @description T(n) = n; S(n) = n;
 */
const minMoney = (money) => {
  let moneyTemp = money;
  const s = 'dass';
  const moneyCount = [5, 2, 2, 3, 5];
  const moneySize = [1, 5, 10, 50, 100];
  const N = 5;
  let num = 0;
  for (let i = N - 1; i >= 0; i--) {
    const c = Math.min(Math.floor(moneyTemp / moneySize[i]), moneyCount[i]);
    moneyTemp -= c * moneySize[i];
    num += c;
  }
  if (money > 0) num = -1;
  return num;
};
module.exports = minMoney;
