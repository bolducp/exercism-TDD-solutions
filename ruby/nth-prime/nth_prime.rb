class Prime

  def self.nth(number)
    raise ArgumentError.new if number < 1
    primes = []
    counter = 1
    while primes.length < number do
      counter += 1
      if prime?(counter)
        primes << counter
      end
    end
    primes.last
  end

  def self.prime?(num)
    (2..num/2).none?{ |i| num % i == 0 }
  end

end