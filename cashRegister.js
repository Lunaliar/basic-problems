/*
Design a cash register drawer function checkCashRegister() 
that accepts purchase price as the first argument (price),
 payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return 
an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if 
cash-in-drawer is less than the change due, or 
if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer
 as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with 
the change due in coins and bills, sorted in highest to lowest order,
 as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]

TESTS:
checkCashRegister(
  19.5, 20, 
  [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]
  ) should return an object.

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 
should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 
should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
 should return {status: "INSUFFICIENT_FUNDS", change: []}.

 checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
 should return {status: "INSUFFICIENT_FUNDS", change: []}.

 checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
 should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
*/

function checkCashRegister(price, cash, cid) {
	const values = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
	let result = { status: "", change: [] };
	const drawer = [...cid];
	let change = (cash - price) * 100;
	let empty = false;

	for (let i = drawer.length - 1; i >= 0; i--) {
		let name = drawer[i][0];
		let amount = drawer[i][1] * 100;
		if (amount > 0) empty = false;
		const value = values[i];

		if (change >= value) {
			let currArr = [name, 0];
			while (change >= value && amount > 0) {
				currArr[1] += value;
				amount -= value;
				change -= value;
			}
			currArr[1] /= 100;
			result.change.push(currArr);
			if (amount === 0) empty = true;
		}
	}
	if (change === 0 && empty) result = { status: "CLOSED", change: [...cid] };
	else if (change === 0) result.status = "OPEN";
	else if (change > 0 && result.change.length >= 1) {
		result = { status: "INSUFFICIENT_FUNDS", change: [] };
	}
	return result;
}
