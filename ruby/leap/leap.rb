class Year
  class << self
    def leap?(year)
      isDivisibleBy?(year, 4) && !isDivisibleBy?(year, 100) || isDivisibleBy?(year, 400)
    end
  end
end

def isDivisibleBy?(x, y)
  return (x % y).zero?
end

module BookKeeping
  VERSION=2
end