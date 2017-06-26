defmodule Bob do
def hey(input) do
    cond do
        question?(input) -> "Sure."
        empty?(input) -> "Fine. Be that way!"
        invalid_speech(input) -> "Whatever."
        shouting?(input) -> "Whoa, chill out!"
        true -> "Whatever."
    end
  end

  def invalid_speech(input) do
    !(input =~ ~r/[[:alpha:]]/)
  end

  def empty?(input) do
    input
    |> String.strip == ""
  end

  def shouting?(input) do
    input
    |> String.upcase == input
  end

  def question?(input) do
    input
    |> String.last == "?"
  end
end
