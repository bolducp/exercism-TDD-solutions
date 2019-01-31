defmodule Words do
  @doc """
  Count the number of words in the sentence.
  Words are compared case-insensitively.
  """
  @spec count(String.t) :: map
  def count(sentence) do
    sentence
    |> String.downcase()
    |> String.split([",", ":", "@", "&", "^", "%", "!", "?", "$", "_", " "], trim: true)
    |> make_hist()
  end

  def make_hist(word_list) do
    word_list
    |> Enum.reduce(%{}, fn (word, acc) -> Map.update(acc, word, 1, &(&1 + 1)) end)
  end
end
