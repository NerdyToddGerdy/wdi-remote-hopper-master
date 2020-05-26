# ===================
# Commit 1
# ===================

# adjective = "Big Bad"
# p "Hello #{adjective} World"


# ===================
# Commit 2
# ===================

nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]
# p nums.uniq
# p nums.push(2)
# p nums.pop()
# p nums.length
# p nums.include? 8


# ===================
# Commit 3
# ===================

# def find_area(height, width)
#    p height * width
# end
# find_area(2,3)
#
#
# def multiply_each_by_five(arr)
#    p arr.map {|num| num * 5}
# end
# multiply_each_by_five(nums)

# ===================
# Commit 4
# ===================

# all_nums = Array(1..1000)
# new_arr = all_nums.select{|i| (i % 5 == 0 && i % 3 == 0) || i % 3 == 0 || i % 5 == 0}
# p new_arr.reduce(:+)


# ===================
# Commit 5
# ===================


# require 'prime'
# def check_prime?(num)
#    p Prime.instance.prime?(num)
# end
# check_prime?(44)
# check_prime?(5)
#
# def get_primes(num)
#    Prime.each(num) do |prime|
#       p prime
#    end
# end
# get_primes(97)

# ===================
# Commit 6
# ===================

# puts "Please add text"
# text = gets.chomp
#
# words = text.split(" ")
# frequencies = Hash.new(0)
# words.each {|word| frequencies[word] += 1}
# frequencies = frequencies.sort_by {|a,b| b}
# frequencies.reverse!
# p frequencies[0]


# ===================
# Commit 7
# ===================

# def pandigital(num)
#    num_arr = num.to_s.split("")
#    frequencies = Hash.new(0)
#    num_arr.each {|numb| frequencies[numb] += 1}
#    frequencies = frequencies.sort_by {|a,b| b}
# end
#
#
# pandigital(15234)
