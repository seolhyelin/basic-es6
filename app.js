const wrapper = document.querySelector(".wrapper");

const friends = ["me", "lin", "dal", "mark"];

const list = `
<h1>I love</h1>
<ul>
${friends.map((friend) => `<li>${friend} 💜</li>`).join("")}
</ul>
`;

wrapper.innerHTML = list;
