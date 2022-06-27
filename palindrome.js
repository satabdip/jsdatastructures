1. Check for Palindromes With Built-In Functions
To pass the last test case, we can use two Regular Expressions:

/[^A-Za-z0–9]/g  or /[\W_]/g

\W removes all non-alphanumeric characters:
\W matches any non-word character
\W is equivalent to [^A-Za-z0–9_]
\W matches anything that is not enclosed in the brackets
 [^A-Za-z0–9_]:
[^A-Z] matches anything that is not enclosed between A and Z

[^a-z] matches anything that is not enclosed between a and z

[^0-9] matches anything that is not enclosed between 0 and 9

[^_] matches anything that does not enclose _

function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}

2. Check for Palindromes With a FOR loop

function palindrome(str) {
 var re = /[^A-Za-z0-9]/g;
 str = str.toLowerCase().replace(re, ''); // abcdcba
 var len = str.length;
 for (var i = 0; i < len/2; i++) { // 0 1 2 3 4 5 6
   if (str[i] !== str[len - 1 - i]) { // (0 6)  (1 5) (2 4) (3 3)
       return false;
   }
 }
 return true;
}
palindrome("A man, a plan, a canal. Panama");
