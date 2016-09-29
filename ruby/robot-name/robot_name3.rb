class Robot
 	attr_accessor :name

	def initialize()
		@name = make_random_name()
	end

	def make_random_name()
		name = []
		name << (0...2).map { (65 + rand(26)).chr }
		name << (0...3).map { rand(10) }
		name.join
	end

	def reset
		@name = make_random_name()
	end
end


module BookKeeping
	VERSION=2
end