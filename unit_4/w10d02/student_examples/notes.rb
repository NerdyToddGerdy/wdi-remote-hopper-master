string_1="removes any spaces trailing the string  "
string_2="removes any spaces trailing the string"

p string_1.rstrip
p string_2.rstrip
p "+++++++++++++++++++"
# p string_1.rstrip!
# p string_2.rstrip!

p "<><><><><><><><><><><><><><>"
string_3 = string_1.rstrip
p string_1
string_4 = string_1.rstrip!

p string_1
p string_3
p string_4

#
# Removes trailing whitespace from str, returning nil if no change was made.
#
# Refer to strip for the definition of whitespace.
