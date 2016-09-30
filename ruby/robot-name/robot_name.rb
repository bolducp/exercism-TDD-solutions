require "set"

class Robot
  attr_reader :name
  @@used_names = Set.new

  def initialize
    set_name
  end

  def set_name
    @name = get_unique_name
    @@used_names << @name
  end

   def reset
    @@used_names.delete(@name)
    set_name
  end
  
  def get_unique_name
    loop do
      candidate = generate_random_name
      return candidate unless @@used_names.include? candidate
    end
  end

  def generate_random_name
    name = []
    name << ("A".."Z").to_a.sample(2)
    name << (0..9).to_a.sample(3)
    name.join
  end

  private :get_unique_name, :generate_random_name

end

module BookKeeping
  VERSION=2
end