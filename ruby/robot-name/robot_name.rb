class Robot
  attr_accessor :name
  @@used_names = []

  def initialize()
    @name = make_unused_name()
    @@used_names << @name
  end
  
  def make_unused_name()
    loop do
      name_candidate = make_random_name()
      if !@@used_names.include?(name_candidate)
        return name_candidate
      end
    end
  end

  def make_random_name()
    name = []
    name << (1..2).map { (65 + rand(26)).chr }
    name << (1..3).map { rand(9)}
    name.join
  end

  def reset()
    initialize()
  end
end

module BookKeeping
  VERSION=2
end