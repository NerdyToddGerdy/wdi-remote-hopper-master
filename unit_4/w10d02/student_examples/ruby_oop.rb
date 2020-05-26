# # # p 'oop file is running'
# #
# # # class Person
# # #    attr_accessor :name, :age, :occupation
# # #    def initialize(name, age)
# # #       @name = name
# # #       @age = age
# # #    end
# # #    def message
# # #       p "hi #{@name}"
# # #    end
# # # end
# # #
# # # person1 = Person.new("Barney", 80)
# # # person2 = Person.new("Todd", 30)
# # # p person1.name
# # # p person1.age
# # # p person2
# # # p person2.message
# #
# #
# # class User
# #    attr_accessor :username, :password, :email, :age, :favorite_color, :favorite_food
# #    FAVORITE_COLORS = ["red", "white", "blue", "green"]
# #    FAVORITE_FOODS = ["pizza", "hot dogs", "tacos", "Toaster struddel"]
# #    def initialize(username, password, email, age)
# #       @username = username
# #       @password = password
# #       @email = email
# #       @age = age
# #       # @favorite_color = FAVORITE_COLORS.sample
# #       # @favorite_food = FAVORITE_FOODS.sample
# #    end
# #    def name_and_age
# #       p "#{@username} is #{@age}"
# #    end
# #    def scramble
# #       @password = @password.split("").shuffle!.join()
# #    end
# #    def default
# #       (username = "username", password = "password", email="email")
# #       @username = username
# #       @password = password
# #       @email = email
# #       @password = password
# #       @age = age
# #    end
# #
# # end
# #
# # user1 = User.new("Todd", "fluffybunny1" '123@abc.456', '30')
# #
# # user1.name_and_age
# # # p user1.password
# # # p user1.default
# # # p user1.favorite_color
# # # p user1.favorite_food
#
# class Country
#    def message
#       "Greetings Aliens, I am a country of Earth"
#    end
# end
#
# class USA < Country
# end
# us = USA.new
# p us.message
#
# class Australia < Country
# end
# aussie = Australia.new
# p aussie.message


class Pet
   attr_accessor :rescue, :gender, :disposition

   def initialize(rescued, gender, disposition)
      @rescued = rescued
      @gender = gender
      @disposition = disposition
   end

   def sleep
      p "I am sleeping on the couch"
   end

   def begin
      p "I'm begging for food"
   end
end

class Cat < Pet
   attr_accessor :snark, :breed

   def initialize(snark, breed)
      @snark = snark
      @breed = breed
   end

   def meow
      p "MEOW"
   end
end

willow = Cat.new(true, "tabby")

# p willow.breed
p Cat.ancestors

# end
