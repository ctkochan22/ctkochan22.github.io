even_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

even_array.delete_if{|element| element % 2 == 0}

puts(even_array)


