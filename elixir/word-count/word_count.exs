defmodule Words do
  @doc """
  Count the number of words in the sentence.
  Words are compared case-insensitively.
  """
  @spec count(String.t) :: map
  def count(sentence) do
    sentence
    |> String.downcase
    |> String.replace([",", ":", "@", "&", "^", "%", "!", "?", "$"], "")
    |> String.split(["_", " "], trim: true)
    |> Enum.map(&String.trim/1)
    |> hist
  end

  def hist(word_list) do
    hist(word_list, %{})
  end

  def hist(word_list, map) do
    if length(word_list) == 0 do
      map
    else
      hist(tl(word_list), Map.update(map, hd(word_list), 1, &(&1 + 1)))
    end
  end
end
