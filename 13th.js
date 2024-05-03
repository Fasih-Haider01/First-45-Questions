var friendss = ["Saira", "Sumera", "Hinza", "Sawaira"];
friendss.forEach(function (list) {
    console.log("Hii!  ".concat(list, " i am inviting you on a dinner don't miss that.\n "));
});
// starting from exercise 12
var dontcome = friendss[2];
console.log("\t Sorry guyz unfortunately ".concat(dontcome, " can't make to the dinner  "));
friendss.splice(2, 1, "Isra");
friendss.forEach(function (gues) {
    console.log("\nbut ".concat(gues, " you are still invited so don't forget"));
});
