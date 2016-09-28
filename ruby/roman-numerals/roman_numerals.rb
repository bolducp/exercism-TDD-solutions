module RomanNumerals
  NUMBERS_TO_NUMERALS = {
    1000 => "M",
    900 => "CM",
    500 => "D",
    400 => "CD",
    100 => "C",
    90 => "XC",
    50 => "L",
    40 => "XL",
    10 => "X",
    9 => "IX",
    5 => "V",
    4 => "IV",
    1 => "I"
  }

  def to_roman
    numeral = ""
    nums = get_num_pieces(self)

    nums.reverse.each do |number|
      NUMBERS_TO_NUMERALS.each do |num, value|
        while number >= num do
          numeral << value
          number = number - num
        end
      end
    end
    numeral
  end

def get_num_pieces(num)
    array = []
    num.to_s.split('').reverse.each_with_index { |digit, index| array << digit.to_i * 10**index }
    array
  end
end

class Fixnum
  include RomanNumerals
end

module BookKeeping
  VERSION=2
end