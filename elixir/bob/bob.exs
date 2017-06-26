defmodule Bob do
def hey(input) do
    cond do
        question?(input) -> "Sure."
        empty?(input) -> "Fine. Be that way!"
        shouting?(input) -> "Whoa, chill out!"
        true -> "Whatever."
    end
  end

  def empty?(input) do
    String.strip(input) == ""
  end

  def shouting?(input) do
    String.upcase(input) == input && valid_speech(input)
  end

  def question?(input) do
    String.last(input) == "?"
  end

  def valid_speech(input) do
    input =~ ~r/[[:alpha:]]/
  end
end
