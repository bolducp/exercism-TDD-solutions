module RomanNumerals
  ARABIC_TO_ROMAN = {
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
    
    ARABIC_TO_ROMAN.each do |arabic_num, roman_num|
      while number >= arabic_num do
        numeral << roman_num
        number -= arabic_num
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