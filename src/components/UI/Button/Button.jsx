import classes from './Button.module.css';

const Button = ({ children, ...props }) => {
  const { button } = classes;

  console.log(props);

  return (
    <button className={ button } { ...props }>
      { children }
    </button>
  );
};

export default Button;