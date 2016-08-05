require 'pry'

def pluralize(word)
  endings = ['o', 's', 'x', 'z', 'sh', 'ch']
  if endings.include?(word[-1]) || endings.include?(word[-2, 2])
    word + 'e'
  elsif word[-1] == 'y'
    word[0...-1] + 'ie'
  end

  word + 's'
end

def my_opinion(fruits)
  fruits.each do |fruit|
    unless fruit == 'pizza'
      puts pluralize(fruit) + ' are the best!!!'
    else
      puts pluralize(fruit) + ' are pretty good, I guess...'
    end
  end
end

my_opinion(['apple', 'pizza', 'orange', 'tomato', 'asparagus', 'box', 'fizz', 'strawberry', 'peach', 'fish'])

binding.pry
