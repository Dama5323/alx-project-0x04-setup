interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor: 'red' | 'blue' | 'green';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  buttonLabel, 
  buttonBackgroundColor, 
  onClick 
}) => {
  const backgroundColor = {
    red: 'bg-red-500 hover:bg-red-600',
    blue: 'bg-blue-500 hover:bg-blue-600',
    green: 'bg-green-500 hover:bg-green-600'
  }[buttonBackgroundColor];

  return (
    <button
      onClick={onClick}
      className={`${backgroundColor} text-white font-semibold py-2 px-6 rounded-lg transition duration-300`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;