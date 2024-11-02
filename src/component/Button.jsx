function Button({ children, onClick }) {
  return <span onClick={onClick}>{children}</span>;
}

export default Button;
