let personName = "Fasih";
console.log("lowercase : ",personName.toLowerCase());
console.log("UPPERCASE : ",personName.toUpperCase());
console.log("Tittlecase : ",personName.replace(/\b\w/g,char => char.toUpperCase()));