class Pangram
  @@alphabet = ("a".."z")

  def self.is_pangram?(str)
    @@alphabet.all? { |letter| str.downcase.include? letter }
  end
end

module BookKeeping
  VERSION=2
end