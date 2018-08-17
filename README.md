# _Beep Boop Translator_

#### _Friday Independent Project for Epicdous, 8.17.2018_

#### By _**Kenneth Du**_

## Description

_.Create a web application that takes a number from a user and returns a range of numbers from 0 to the chosen number with the following exceptions:

    Numbers that contain a 0 are replaced (all digits) with "Beep!"
    Numbers that contain a 1 are replaced (all digits) with "Boop!"
    Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."

These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. So, for example, in your finished program the number 10 should be replaced with "Boop!", and the number 30 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."

Also a user should be able to enter a new number and see new results over and over again.

Break the program down into simple, individual behaviors with input/output examples. Begin with the simplest possible behavior. List these behaviors (also known as "specs" or "specifications") in the project's README.md file.._

## Setup/Installation Requirements

* Clone this repository
* Open index.html file 
* Input a number in the text box to translate the number

## Specifications

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **The program replaces 0 with "Beep!"** | Input: "0" | Output: "Beep!" |
| **The program replaces 1 with "Boop!"** | Input: "10" | Output: "Boop!"|
| **The program replaces all numbers divisible by 3 with "I'm sorry, Dave. I'm afraid I can't do that."** | Input: "9" | Output: "I'm sorry, Dave. I'm afraid I can't do that."|
| **The program returns the initial number if it does not meet the 3 conditions above.** | Input: "22" | Output: "22"|


## Known Bugs

_There are no known bugs._

## Support and contact details

_kennethdu3@gmail.com_

## Technologies Used

_HTML, CSS, javaScript, jQuery, Bootstrap_

### License

Copyright (c) 2018 **_Kenneth_Du_**
