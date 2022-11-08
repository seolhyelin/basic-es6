const styled = (element) => {
  const el = document.createElement(element);
  return (args) => {
    const styles = args[0];
    el.style = styles;
    return el;
  };
};

const title = styled("h1")`
  color: blue;
  background-color: red;
`;
title.innerText = "we just cloned styled components";
document.body.append(title);
