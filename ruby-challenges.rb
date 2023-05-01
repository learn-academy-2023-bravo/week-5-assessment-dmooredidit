# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

letter_o = 'o'
letter_t = 't'

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
def particular_letters(array, letter)
    letter_result = []
    
    array.each do |array|
        if array.include?(letter)
            letter_result << array
        end
    end
    return letter_result
end
p particular_letters(beverages_array(letter_o))
p particular_letters(beverages_array(letter_t))

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# def flat_array(hash)
# all_array = []
#     hash.each do {|key, value| array.flatten(array).sort.join}
#     end
#     all_array << array
#     return all_array
# end
# p flat_array(us_states)

def flat_array(hash)
all_array = []
    hash.each do |key, value|
        if value.is_a?(Hash)
            all_array.concat(flat_array(value))
        else
            all_array << value
        end
    end
    return all_array.flatten.sort
end

p flat_array(us_states)
# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike 
    attr_accessor :model, :wheels  
    def initialize(model, wheels,)
        @model = model
        @wheels = wheels
        @mph = 0
    end
    
    # def get_model
    #     @model
    # end

    # def get_wheels
    #     @wheels
    # end

    def get_mph
        @mph = 0
    end 

    def bike_info
        @bike_info 
            "the #{@model} has #{@wheels} and is going #{@mph}"
    end

end



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

class Bike 
    attr_accessor :model, :wheels, :current_speed :pedal_faster :brake

    def initialize(model, wheels, current_speed, pedal_faster, brake)
        @model = model
        @wheels = wheels
        @mph = 0
        @current_speed = current_speed
        @pedal_faster = pedal_faster
        @brake = brake
    end

    def get_mph
        @mph = 0
    end 

    def get_current_speed 
        if @current_speed >= 0
            p @current_speed
        elsif 
            @current_speed = 0
        end 
    end

    def pedal_faster
        @pedal_faster = @current_speed + @pedal_faster
        p pedal_faster
    end

    def brake
        @brake = @current_speed + @brake
        p brake
    end

    def get bike_info
       @bike_info
        "the #{@model} has #{@wheels} and is going #{@current_speed}"
    end

end
# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
