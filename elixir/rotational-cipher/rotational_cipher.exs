defmodule RotationalCipher do
  @doc """
  Given a plaintext and amount to shift by, return a rotated string.

  Example:
  iex> RotationalCipher.rotate("Attack at dawn", 13)
  "Nggnpx ng qnja"
  """
  @spec rotate(text :: String.t(), shift :: integer) :: String.t()
  @letter_codes Enum.to_list(?a .. ?z)

  def rotate(text, shift) do
    chars = String.to_charlist(text)
    text
    |> to_charlist()
    |> Enum.map( fn x -> rotate_char(x, shift) end)
    |> to_string()

    word = Enum.map(chars, fn(char) ->
      shifted = char + shift
      cond do
        !(char in ?a..?z || char in ?A..?Z) || (char == 32) ->
          char
        shift == 26 ->
          char
        shifted <= 122 ->
          shifted
        true ->
          shifted - 122
      end
    end)
    List.to_string(word)
  end
end

 defp rotate_char(char, shift) do
   shifted = char + shift
   cond do
     !(char in ?a..?z || char in ?A..?Z)  -> 
       char
     (char > 96 && char < 123) ->
       (char - 97 + shift) |> rem(26) |> Kernel.+(97)
     true ->
       char
   end
 end
