function foo(x){
  if (x === null || x === undefined) {
    return 0; // Handle null or undefined cases
  } else if (typeof x === 'string' || Array.isArray(x)) {
    return x.length;
  } else {
    return NaN; // Handle other cases appropriately
  }
}