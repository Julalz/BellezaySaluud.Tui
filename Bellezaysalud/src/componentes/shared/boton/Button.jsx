import "./button.css";

function Button({ text, url }) {
  return (
    <a href={url} className="button-shared">
      {text}
    </a>
  );
}

export default Button;
