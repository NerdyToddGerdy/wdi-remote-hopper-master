class Stack
  def initialize
    @stack = []
  end
  def new
    return @stack
  end
  def push(el)
    @stack.push(el)
    return el
  end
  def pop
    @stack.pop
  end
  def peek
    return @stack[@stack.length-1]
  end
end
