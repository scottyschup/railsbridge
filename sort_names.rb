if __FILE__ == $PROGRAM_NAME
  file = ARGV[0] || 'attendees.csv'

  # Trim data
  peeps = []
  File.readlines(file).each do |line|
    unless line.split(',').first == 'Name'
      name, role = line.chomp.split(',').first(2)
      name = name.split
      last = name.last
      first = name[0..-2]
      peeps << [last, first, role]
    end
  end

  # Sort by last name
  peeps.sort! { |x, y| x.first <=> y.first }

  # Create new file with sorted names
  f = File.open('attendees.txt', 'w')
  peeps.each do |peep|
    f.puts(peep.join(","))
  end
  f.close
end
