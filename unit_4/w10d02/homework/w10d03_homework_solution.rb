# <><><><><><><><><><><><><><><><>
# Commit 1 & 2
# <><><><><><><><><><><><><><><><>


# class Muppet
#    attr_accessor :name
#    COLOR=['red','greem','blue']
#    def initialize(name)
#       p "This muppet is called #{name}"
#       @name = name
#       @color = COLOR.sample
#    end
#
#    def honk
#       p "#{name} is making a honking sound!"
#    end
#
#    def flail
#       p "#{name} is flailing its arms!"
#    end
# end
#
# new_muppet = Muppet.new("Animal")
# new_muppet.flail
# q = Muppet.new("K-Rad")
# q.honk



# class Bird
#    attr_accessor :adjective, :name
#    SPECIES=['Belted Kingfisher', 'Yellow-Billed Cuckoo', 'White-Cheeked Pintail', 'Cinnamon Teal', 'Lesser Scaup']
#    def initialize(adjective, name)
#       @adjective = adjective
#       @name = name
#       p "#{@name} is a(n) #{@adjective} bird!"
#       @species = SPECIES.sample
#    end
#
#    def hungry
#       p "#{name} wants some regurgutated worms!"
#    end
#
#    def fly
#       p "Flap! #{name} is taking flight!"
#    end
# end
# new_bird = Bird.new('pretty', 'Polly')
# p new_bird
# new_bird.hungry
# new_bird.fly

# <><><><><><><><><><><><><><><><>
# Commit 3
# <><><><><><><><><><><><><><><><>

# class Dessert
# attr_accessor :name, :sugar_content
#    def initialize(name, sugar_content)
#       @name = name
#       @sugar_content = sugar_content
#    end
#
#    def eat
#       p "Yum! This #{name} is sooooo delicious!"
#    end
# end
#
# class Pie < Dessert
#
# end
#
# class DeepFriedDessert < Dessert
#    def eat
#       p "Yum! This #{name} is sooo...ack! ugh! *heart-attack*"
#    end
# end
#
# class IceCream < Dessert
#    def initialize(name, sugar_content)
#       super
#    end
#    def on_top(toppings)
#       @toppings = toppings
#    end
# end
#
# a = Pie.new("Apple Pie", "not too much sugar")
# b = DeepFriedDessert.new("Deep Fried Twinky", "fried sugar")
# c = IceCream.new('chocolate', 'cold')
# p a
# p b
# p c.on_top('sprinkles')
# p c


# <><><><><><><><><><><><><><><><>
# Commit 3
# <><><><><><><><><><><><><><><><>

class Universe
   attr_accessor :item1, :item2, :item3, :crunched
   def initialize(item1, item2, item3)
      @items = [item1, item2, item3]
      @expanding = true
      @conservation = true
      @crunched = false
   end
   def see_all_things
      @items.each {|item| p item}
   end
   def create(new_item)
      if @conservation == true
         @items.sample.replace(new_item)
      else
         @items.push(new_item)
      end
   end
   def check_density
      if @items.length >= 10
         @expanding = false
      end
      p @expanding
   end
   def energy_conservation
      @conservation = false if @items.uniq.length == 1
      p @conservation
   end
   def crunch?
      if expanding == false
         @items.each! do |item|
            p item " has beed crunched due to gravity"
            item = nil
         end
         if @items.uniq.length == 1
            p "the universe has ended"
            crunched = true
         end
      end
   end
end

# here = Universe.new("sun", "moon", '42')
# # here.see_all_things
# # p "================"
# here.create("mosguitos")
# here.create("mosguitos")
# here.create("mosguitos")
# here.create("mosguitos")
# here.create("mosguitos")
# here.create("mosguitos")
# here.create("mosguitos")
# here.create("mosguitos")
# here.create("mosguitos")
# here.create("mosguitos")
# here.create("mosguitos")
# p "================"
# here.see_all_things
# here.energy_conservation

# there = Universe.new("hats", "toothpaste", "stuff")
# there.check_density

def simulator(item1, item2, item3)
   # random_creation = ['Belted Kingfisher', 'Yellow-Billed Cuckoo', 'White-Cheeked Pintail', 'Cinnamon Teal', 'Lesser Scaup', 'Bufflehead', 'Common Goldeneye', 'Fulvous Whistling Duck', 'Hooded Merganser', 'White-Winged Scoter', 'Chimney Swift', 'Rufous Hummingbird', 'Chuck-Wills-Widow', 'Whip-Poor-Will', 'Albatross']
   yonder = Universe.new(item1, item2, item3)
   while yonder.crunched == false
      p yonder.@items
      yonder.@crunched = true
   end
end

simulator('Hulk', 'squirel girl', 'agent x')
