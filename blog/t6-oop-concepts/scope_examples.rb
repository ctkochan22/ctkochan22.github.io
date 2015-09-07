



# variable = "Local Variable"
# puts variable

# 3.times do |counter|
#   local_variable = "Overwritten!"
#   puts local_variable
# end

# puts local_variable


class Example

  def initialize
    @instance = "Instance Variable"
  end

  def shout
    puts @instance
  end

  def add_exclamation
    @instance = @instance + "!!!!"
  end
end

example = Example.new
example.shout
example.add_exclamation
example.shout