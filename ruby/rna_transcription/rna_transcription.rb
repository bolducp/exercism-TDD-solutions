class Complement
  class << self
    def of_dna(sentence)
      @complements = { 
        "G" => "C",
        "C" => "G",
        "T" => "A",
        "A" => "U"
      }

      return sentence.each_char.map do |nucleotide|
        if !@complements.has_key?(nucleotide)
          return ""
        end
        @complements[nucleotide]
      end
      .join("")

    end
  end
end 