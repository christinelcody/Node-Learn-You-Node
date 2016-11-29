var total = 0;
 process.argv.forEach( function(e, i) {
 if (1 < i) {
 total += +e;
 }
 });
 console.log(total);