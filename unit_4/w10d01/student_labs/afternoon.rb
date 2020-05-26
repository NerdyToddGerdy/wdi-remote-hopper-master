# def get_name
#    puts "What is your name?"
#    name = gets.chomp
#    p name
# end
#
# get_name

# def reverse_it
#    string = "a man, a plan, a canal, frenemies!"
#    string.reverse!
#    p string
# end
#
# reverse_it

# def swap_em
#    a = 10
#    b = 30
#    temp = b
#    b = a
#    a = temp
#
#    p "A is now #{a}, and b is now #{b}"
# end
#
# swap_em

# def multiply_array(ary)
#    return 1 if ary.length == 0
#    total = 1
#    ary.each {|num| total = num * total}
#    p total
# end
# multiply_array([1,2,3])

# def fizzbuzzer(x)
#    if x%(3 * 5) == 0
#       return 'fizzbuzz'
#    elsif x % 3 == 0
#       return 'fizz'
#    elsif x % 5 == 0
#       return 'buzz'
#    else
#       return 'archer'
# end

# def nth_fibonacci_number
#    fibs = [1,1]
#    p "Which fibonacci number do you want?"
#    num = gets.chomp
#
#    while fibs.length < num.is_i
#       length = fibs.length
#       next_fib = fibs[fibs.length-2] + fibs[fibs.length - 1]
#       fibs.push(next_fib)
#       p "#{fib[fibs.length-1]} is the fibonacci number at position #{num}"
# end
