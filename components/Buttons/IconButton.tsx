interface IconButtonProps {
  Icon: any;
  onClick: () => void;
}

const IconButton = ({ Icon, onClick }: IconButtonProps) => {
  return (
    <button
      className="cursor-pointer flex items-center space-x-2"
      onClick={onClick}
    >
      <Icon size={22} />
    </button>
  );
};

export default IconButton;
