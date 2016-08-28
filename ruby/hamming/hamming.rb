class Hamming
  class << self
    def compute(strand1, strand2)
      raise ArgumentError unless strand1.length == strand2.length
      counter = 0
      strand1.chars.each_with_index do |value, index|
        if value != strand2.chars[index]
          counter += 1
        end
      end
      counter
    end
  end
end
