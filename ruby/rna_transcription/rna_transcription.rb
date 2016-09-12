class Complement
  class << self
    def of_dna(sentence)
      @complements = { 
        "G" => "C",
        "C" => "G",
        "T" => "A",
        "A" => "U"
      }
      @transcribed_nucleotides = []

      sentence.split("").each do |nucleotide|
        if !@complements.has_key?(nucleotide)
          return ""
        end
        @transcribed_nucleotides << @complements[nucleotide]
      end

      @transcribed_nucleotides.join("")

    end
  end
end 
