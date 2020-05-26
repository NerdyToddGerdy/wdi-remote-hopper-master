# def add_let(letter)
#    Proc.new {|let| let + letter}
# end
#
# adding_let = add_let("z")
#
# p adding_let.call('test')

p ["hello", "what", "zoo", "apple"].sort_by{|word| word.length}

p [2, "hello", 1, "what", 3, "zoo", "apple"].sort_by(&:to_s)
