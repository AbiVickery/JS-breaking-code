var foo = 'marvel'; // marvel is not defined
{
    var iron = 'Iron Man';
    let tony = 'Tony Stark';
    const black = 'Black Widow';
    console.log(iron);
    console.log(tony);
    console.log(black);
}
// console.log(marvel); // not defined
// console.log(tony); // tony is not defined

var baz = 'dc';
{
    var bat = 'Batman';
    let sup = 'Superman';
    const lan = 'Green Lantern';
    console.log(bat);
    console.log(sup);
    console.log(lan);
}
console.log(dc);
console.log(bat);