class Prime

  def self.nth(number)
    raise ArgumentError.new("Number must be >= 1.") if number < 1
    primes = []
    counter = 1

    while primes.length < number do
      counter += 1
      primes << counter if prime?(counter)
    end

    primes.last
  end

  private
  def self.prime?(num)
    upper_bound = Math.sqrt(num)
    (2..upper_bound).none?{ |i| num % i == 0 }
  end

end