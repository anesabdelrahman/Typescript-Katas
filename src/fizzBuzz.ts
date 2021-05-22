export function fizzBuzz(value: number): string {
  if(value % 15 == 0 )
    return "FizzBuzz";

  if(value % 3 == 0 || value.toString().indexOf('3') >= 0)
    return "Fizz";

  if(value % 5 == 0 || value.toString().indexOf('5') >= 0)
    return "Buzz";

  return value.toString();
}

export function fizzBuzzTo(value: number) {
  let returnArray: string[] = [];

  for (let i = 1; i <= value; i++){
    returnArray.push(fizzBuzz(i));
  }
  console.log(returnArray)

  return returnArray;
}