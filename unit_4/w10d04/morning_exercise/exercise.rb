def arith_geo(array)
   arr=[]
   (array.length-1).times do |i|
      arr.push(array[i+1] - array[i])
   end

   if arr.uniq.length == 1
      p "Arithmetic"
   else
      arr=[]

      (array.length-1).times do |j|
         arr.push(array[j+1] / array[j])
      end

      if arr.uniq.length == 1
         p "Geometric"
      else
         p "-1"
      end
   end
end

arith_geo([2, 4, 6, 8]) #returns Arithmetic
arith_geo([20, 28, 36, 44]) #returns Arithmetic
arith_geo([2, 6, 18, 54]) #returns Geometric
arith_geo([6, 12, 24, 48]) #returns Geometric
arith_geo([8,6,4,2,7 ,22]) # should give -1
