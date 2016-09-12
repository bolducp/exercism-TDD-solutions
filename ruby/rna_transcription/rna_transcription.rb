class Complement
  class << self
    def of_dna(sentence)
      @complements = { 
        "G" => "C",
        "C" => "G",
        "T" => "A",
        "A" => "U"
      }

      sentence.each_char.map do |nucleotide|
        !@complements.has_key?(nucleotide) ? (return "") : @complements[nucleotide]
      end
      .join("")

    end
  end
end 