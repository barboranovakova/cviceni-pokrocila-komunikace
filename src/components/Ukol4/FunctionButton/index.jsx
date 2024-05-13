import './style.css';

export const FunctionButton = ({ label, onFuctionClick }) => {
  return (
    <button onClick={() => onFuctionClick()} className="numpad-button">
      {label}
    </button>
  );
};
