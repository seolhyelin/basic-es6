const wrapper = document.querySelector(".wrapper");

const addWelcome = () => {
  console.log(wrapper);
  const div = `
  <div class='hello'>
  <h1 class='title'>hello</h1>
  </div>
  `;
  wrapper.innerHTML = div;
};

setTimeout(addWelcome, 3000);
