defmodule SecretHandshake do
  @doc """
  Determine the actions of a secret handshake based on the binary
  representation of the given `code`.

  If the following bits are set, include the corresponding action in your list
  of commands, in order from lowest to highest.

  1 = wink
  10 = double blink
  100 = close your eyes
  1000 = jump

  10000 = Reverse the order of the operations in the secret handshake
  """
  @spec commands(code :: integer) :: list(String.t())
  def commands(code) do
    digits =
      Integer.digits(code, 2) |> Enum.reverse

    wink([], Enum.at(digits, 0))
    |> double_blink(Enum.at(digits, 1))
    |> close_your_eyes(Enum.at(digits, 2))
    |> jump(Enum.at(digits, 3))
    |> reverse(Enum.at(digits, 4))

  end

  defp reverse(commands, 1), do: Enum.reverse(commands)
  defp reverse(commands, _num), do: commands

  defp jump(commands, 1), do: commands ++ ["jump"]
  defp jump(commands, _num), do: commands

  defp close_your_eyes(commands, 1), do: commands ++ ["close your eyes"]
  defp close_your_eyes(commands, _num), do: commands

  defp double_blink(commands, 1), do: commands ++ ["double blink"]
  defp double_blink(commands, _num), do: commands

  defp wink(commands, 1), do: commands ++ ["wink"]
  defp wink(commands, _num), do: commands
end

SecretHandshake.commands(1)
