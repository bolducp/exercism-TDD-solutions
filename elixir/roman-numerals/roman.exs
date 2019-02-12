defmodule Roman do
  @doc """
  Convert the number to a roman number.
  """

  @spec numerals(pos_integer) :: String.t()
  def numerals(number) do
    thousands =
      number
      |> get_interval_digit(-4)
      |> handle_1000s()

    hundreds =
      number
      |> get_interval_digit(-3)
      |> handle_100s()

    tens =
      number
      |> get_interval_digit(-2)
      |> handle_10s()

    ones =
      number
      |> get_interval_digit(-1)
      |> handle_1s()

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

  def handle_1000s(number) do
    number
    |> case do
      0 -> ""
      total -> String.duplicate("M", total)
    end
  end

  def handle_100s(number) do
    number
    |> case do
      0 -> ""
      1 -> "C"
      2 -> "CC"
      3 -> "CCC"
      4 -> "CD"
      5 -> "D"
      6 -> "DC"
      7 -> "DCC"
      8 -> "DCCC"
      9 -> "CM"
    end
  end

  def handle_10s(number) do
    number
    |> case do
      0 -> ""
      1 -> "X"
      2 -> "XX"
      3 -> "XXX"
      4 -> "XL"
      5 -> "L"
      6 -> "LX"
      7 -> "LXX"
      8 -> "LXXX"
      9 -> "XC"
    end
  end

  def handle_1s(number) do
    number
    |> case do
      0 -> ""
      1 -> "I"
      2 -> "II"
      3 -> "III"
      4 -> "IV"
      5 -> "V"
      6 -> "VI"
      7 -> "VII"
      8 -> "VIII"
      9 -> "IX"
    end
  end
end
