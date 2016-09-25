class Pangram
  @@alphabet = "abcdefghijklmnopqrstuvwxyz"

  def self.is_pangram?(str)
    @@alphabet.each_char do |char|
      if !str.downcase.include? char
        return false
      end
    end
      return true
  end
end

module BookKeeping
  VERSION=2
end