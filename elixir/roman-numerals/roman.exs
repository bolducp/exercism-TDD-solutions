defmodule Roman do
  @roman_decimal [
    {"M",  1000},
    {"CM", 900},
    {"D",  500},
    {"CD", 400},
    {"C",  100},
    {"XC", 90},
    {"L",  50},
    {"XL", 40},
    {"X",  10},
    {"IX", 9},
    {"V",  5},
    {"IV", 4},
    {"I",  1}
  ]

  def numerals(0), do: ""

  def numerals(number) do
    {roman, decimal} = Enum.find(@roman_decimal, fn {roman, decimal} ->
      number >= decimal
    end)

    roman <> numerals(number - decimal)
  end
end
