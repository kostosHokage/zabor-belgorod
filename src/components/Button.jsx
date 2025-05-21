import './components.scss';

const Button = ({ title, type, maxWidth, white }) => {
  return (
    <button
      className="button"
      type={type ?? undefined}
      style={{
        fontWeight: 600,
        fontFamily: '"Manrope", sans-serif',
        fontSize: 16,
        height: 46,
        lineHeight: '140%',
        letterSpacing: 0,
        width: maxWidth ? '100%' : 'max-content',
        background: white ? '#FFFFFF' : '#1DB606',
        padding: '12px 24px',
        color: white ? '#1DB606' : 'white',
        borderRadius: 5,
        border: white ? '1px solid #1DB606' : 0,
        cursor: 'pointer',
        boxShadow: '0px 0px 28px 0px rgba(29, 182, 6, 0.5)',
      }}
    >
      {title}
    </button>
  );
};

export default Button;
