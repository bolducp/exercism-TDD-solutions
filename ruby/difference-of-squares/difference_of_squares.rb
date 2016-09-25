class Squares
  def initialize(num)
    @num = num
    @num_array = (1..@num).to_a
  end

  def square_of_sum
    sum = 0
    @num_array.each { |num| sum += num}
    sum**2
  end

  def sum_of_squares
    squares = []
    sum = 0
    @num_array.each { |num| squares << num**2 }
    squares.each { |num| sum += num}
    sum
  end

  def difference
    self.square_of_sum - self.sum_of_squares
  end
end

module BookKeeping
 VERSION=3
end