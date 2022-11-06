const nico = {
  name: "nico",
  age: 24,
  addYear() {
    this.age++;
  },
};

console.log(nico);
nico.addYear();
nico.addYear();
console.log(nico);
