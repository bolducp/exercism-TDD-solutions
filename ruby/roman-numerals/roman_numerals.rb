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
    number = self 
    
    NUMBERS_TO_NUMERALS.each do |num, value|
      while number >= num do
        numeral << value
        number -= num
      end
    end
    numeral
  end
end

class Fixnum
  include RomanNumerals
end

module BookKeeping
  VERSION=2
end