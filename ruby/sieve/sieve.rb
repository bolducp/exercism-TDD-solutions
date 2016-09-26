class Sieve

  def initialize(num)
    @num = num
    @range = (2..num).to_a
  end

  def primes
    primes = []

    while @range.any? 
      prime = @range.shift
      primes << prime
      @range.reject! { |num| num % prime == 0 }
    end
    
    primes
  end

end