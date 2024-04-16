const accountId=144553
let accountEmail="mith@gmail.com"
var accountPassword="12345"
accountCity="jaipur"
let accoutnState;
// if we does not give any value then it gives undefined as in output
// there is possible to print data without data type
//account =2 //not allowed
accountEmail="hc@gmail.com"
accountPassword="323"
accountCity="BENGALURU"

console.log(accountId);
/*pwd
Prefer not to use var
because of issue in bloack scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accoutnState])