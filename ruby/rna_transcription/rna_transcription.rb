class Complement
  @@DNA_TO_RNA = { 
    "G" => "C",
    "C" => "G",
    "T" => "A",
    "A" => "U"
  }

  class << self
    def of_dna(sentence)
      sentence.each_char.map do |nucleotide|
        @@DNA_TO_RNA.key?(nucleotide) ? @@DNA_TO_RNA[nucleotide] : (return "") 
      end.join
    end
  end
end 