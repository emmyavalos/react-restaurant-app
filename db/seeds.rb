25.times do
  Menu.create(
    item: Faker::Food.dish,
    description: Faker::Lorem.sentence,
    price: Faker::Commerce.price.to_f,
  )
end

puts 'seeded complete'
