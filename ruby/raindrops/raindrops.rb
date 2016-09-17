module BookKeeping
 VERSION=2
end

class Raindrops
  def self.convert(number)
      converted_string = ""

      converted_string << "Pling" if number % 3 == 0
      converted_string << "Plang" if number % 5 == 0
      converted_string << "Plong" if number % 7 == 0

      if converted_string.empty?
          converted_string << number.to_s
      end

      converted_string
  end
end