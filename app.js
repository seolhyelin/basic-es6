const friends = ["g", "h", "a", "r", "3", "p", "s"];
// const addHeart = (item, index, array) => console.log(item, index, array);
// friends.forEach(addHeart);

for (const friend of friends) {
  if (friend === "p") {
    break;
  } else {
    console.log(friend);
  }
}
