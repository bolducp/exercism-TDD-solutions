Enum.__info__(:functions) |> Enum.each(fn({function, arity}) ->
IO.puts "#{function}/#{arity}"
end)