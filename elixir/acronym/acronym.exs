defmodule Acronym do
  @doc """
  Generate an acronym from a string.
  "This is a string" => "TIAS"
  """
  @spec abbreviate(String.t()) :: String.t()
  def abbreviate(string) do
    Regex.scan(~r/\b[a-z]|[A-Z]/, string)
    |> Enum.join()
    |> String.upcase()
  end
end
