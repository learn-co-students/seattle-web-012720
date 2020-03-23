# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Paddock.delete_all

pad1 = Paddock.create(name: "North Paddock")
pad2 = Paddock.create(name: "East Paddock")

Dinosaur.create(species: "T. rex", paddock: pad1)
Dinosaur.create(species: "Stegosaurus", paddock: pad2)
Dinosaur.create(species: "Triceratops", paddock: pad2)