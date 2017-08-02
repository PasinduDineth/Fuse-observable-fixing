var Observable = require('FuseJS/Observable');
var Typeitems = Observable({name: "Income"}, {name: "Expenditure"});
var Categoryitems = Observable();
var CategoryIncomeItems = [{name: "Salary"}, {name: "Fix Deposits"},{name: "Savings Profit"},{name: "Other Income"}];
var CategoryExpenditureItems = [{name: "Car Leasing"}, {name: "Education Loan"},{name: "Food and Bills"},{name: "Other Expenditure"}];
Categoryitems.replaceAll(CategoryIncomeItems)
function checkType(arg){
    if(arg.data.name == "Income"){
        console.log("type -> Income")
        Categoryitems.clear()
        Categoryitems.replaceAll(CategoryIncomeItems)
        console.log("type checking ->"+JSON.stringify(Categoryitems))
    }else{
        console.log("type -> Expenditure")
        Categoryitems.clear()
        Categoryitems.replaceAll(CategoryExpenditureItems)
        console.log("type checking ->"+JSON.stringify(Categoryitems))
    }
}
function checkCategory(arg){
			
		}
module.exports = {Typeitems,checkType,Categoryitems,checkCategory};