## Operators 

  -  ( + ) plus
  -  ( - ) minus
  -  ( * ) multiply
  -  ( ** ) powered by
  -  ( / ) Division 
  -  ( % ) remain  10%3 = 1
  -  ( ++ ) y = 1 , y++ => y = 2
  -  ( -- )
  -  ( += ) y = 1, y+= 3 => y = 4
  -  ( -= )

## Type Coersion  
  
  - string + number //  string
  - 2 + "2"         //  "22" string
  - 2 * "2"         // 4 number  ( * is not used in strings )
  - "Amir" * 2      // NaN  
  - +"5"            // 5 
  -  +'42'          // 42 (string → number)
  - +true           // 1
  - +false          // 0
  - +null           // 0
  - +undefined      // NaN
  - +'abc'          // NaN
  
## Comparison Operators

  - ( > ) lower than
  - ( < ) greater than
  - ( <= ) equal or greater than
  - ( >= ) equal or lower than 
  - ( == ) equal to 
  - ( === ) equal to considering type



## undefined == null
- Because both null and undefined represent the absence of a meaningful value, JavaScript treats them as loosely equal.

## and / or

  - || 
  - &&

## BitWise Operator 

  - All numbers are internally stored as 64-bit floating-point (IEEE 754 standard).
  - So whether you write 12 or 123456, they take the same fixed amount of memory internally.
  - Using 4 bits can represent numbers up to 15.
  - Using 8 bits (1 byte) can represent numbers up to 255.
  - Using 32 bits (4 bytes) can represent numbers up to about 4 billion (unsigned).
  - example: showing 12 in 8 bits

  0 => 2**0 * 0
  0 => 2**1 * 0
  1 => 2**2 * 1 = 4
  1 => 2**3 * 1 = 8
  0 => 2**4 * 0
  0 => 2**5 * 0
  0 => 2**6 * 0
  0 => 2**7 * 0
  sum = 12 

 ```js
let a = 5;  // binary: 0101
let b = 3;  // binary: 0011

console.log(a & b);  // 1 (0001)
console.log(a | b);  // 7 (0111)
console.log(a ^ b);  // 6 (0110)
console.log(~a);     // -6 (two's complement)
console.log(a << 1); // 10 (1010)
console.log(a >> 1); // 2 (0010)
console.log(a >>> 1);// 2 (0010)
```

- &	AND — sets each bit to 1 if both bits are 1	5 & 3	5 (0101) & 3 (0011) → 1 (0001)
- |	OR — sets each bit to 1 if one of the bits is 1	| 5
- ^	XOR — sets each bit to 1 if only one bit is 1	5 ^ 3	5 (0101) ^ 3 (0011) → 6 (0110)
- ~	NOT — inverts all bits	~5	5 (0101) → ~5 (1010) (in 32-bit: -6)
- <<	Left shift — shifts bits left, fills with 0	5 << 1	5 (0101) << 1 → 10 (1010)
- >>	Signed right shift — shifts bits right, preserves sign	5 >> 1	5 (0101) >> 1 → 2 (0010)
- >>>	Unsigned right shift — shifts bits right, fills with 0	-5 >>> 1	Negative number shifted, fills left bits with 0