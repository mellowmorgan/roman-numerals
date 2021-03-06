Describe: translator()

Test: "It should return a roman numeral for an integer under ten"
Code:
const number = 9;
translator(number);
Expected Output: IX

Test: "It should return a roman numeral for an integer under ten that doesn't have single roman numeral output."
Code:
const number = 3;
translator(number);
Expected Output: "III";

Test: "It should return a roman numeral for an integer over ten that doesn't have single roman numeral literal."
Code:
const number = 13;
translator(number);
Expected Output: "XIII";

Test: "It should return a roman numeral for an integer over 900 that doesn't have single roman numeral literal."
Code:
const number = 969;
translator(number);
Expected Output: "CMLXIX";

# Roman Numerals

#### By Morgan Waites

#### Convert integers to roman numerals

## Technologies Used

* HTML
* CSS
* Javascript/JQuery

## Description

Webpage converts integers to roman numerals from input, displays below.

## Setup/Installation Requirements

* Create and/or navigate to the directory you would like to contain this project on your computer.
* git clone address in terminal
* cd into folder created
* Open the file "index.html"   

## Known Bugs

* Probably not compltely accurate to all roman numeral cases.

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2021 Morgan Waites