defmodule Roman do
  @decimal_to_roman %{
    1 => "I",
    5 => "V",
    10 => "X",
    50 => "L",
    100 => "C",
    500 => "D",
    1000 => "M"
  }

  @doc """
  Convert the number to a roman number.
  """
  @spec numerals(pos_integer) :: String.t()
  def numerals(number) do
    thousands =
      number
      |> get_interval_digit(-4)
      |> convert(@decimal_to_roman[1000])

    hundreds =
      number
      |> get_interval_digit(-3)
      |> convert(@decimal_to_roman[100], @decimal_to_roman[500], @decimal_to_roman[1000])

    tens =
      number
      |> get_interval_digit(-2)
      |> convert(@decimal_to_roman[10], @decimal_to_roman[50], @decimal_to_roman[100])

    ones =
      number
      |> get_interval_digit(-1)
      |> convert(@decimal_to_roman[1], @decimal_to_roman[5], @decimal_to_roman[10])

    thousands <> hundreds <> tens <> ones
  end

  defp get_interval_digit(number, index) do
    number
    |> Integer.to_string()
    |> String.at(index)
    |> case do
      nil -> 0
      num -> String.to_integer(num)
    end
  end

  def convert(digit, one_value, five_value, ten_value) do
    cond do
      digit == 0 ->
        ""
      digit > 0 and digit < 4 ->
        String.duplicate(one_value, digit)
      digit == 4 ->
        one_value <> five_value
      digit == 5 ->
        five_value
      digit > 5 and digit < 9 ->
        five_value <> String.duplicate(one_value, digit - 5)
      digit == 9 ->
        one_value <> ten_value
    end
  end

  def convert(digit, one_value) do
    if digit == 0 do
      ""
    else
      String.duplicate(one_value, digit)
    end
  end
end
