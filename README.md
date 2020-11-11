##Numeral to Arabic Conversion
First in a series of coding challenges.

##Basics
| I, II, III                | 1, 2, 3          |
| ------------------------- | ---------------- |
| X, XX, XXX                | 10, 20, 30       |
| C, CC, CCC                | 100, 200, 300    |
| M, MM, MMM                | 1000, 2000, 3000 |
| V<br>VI<br>VII<br>VIII    | 5<br>6<br>7<br>8 |
| IV                        | 4                |
| IX<br>XI                  | 9<br>11          |
| L<br>XL                   | 50<br>40         |
| D<br>CD                   | 500<br>400       |
| CM                        | 900              |
| MCMXCIX                   | 1999             |


No need to go beyond 3999


##Additional constraints
- You can’t repeat a Unit character more than 3 times (e.g. IIII, XXXX, etc. are disallowed)
- You can’t repeat a Five character (e.g. VV, LL, DD are disallowed)
- You can only subtract a unit from next highest five/unit, (e.g. IV and IX are allowed, but IL and IM aren’t)
- You can only subtract a single unit (e.g. IIX is disallowed)
- You can’t subtract and add units to same number (e.g. IXI is disallowed)
- Except for subtractions, all digits are in nonincreasing order
- What happens in the case of an invalid roman numeral like “ABCDE”?
- What happens in the case of a malformed numeral like “ICXXXXIIVV”?