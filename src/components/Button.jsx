
const Button = ({
    title,
}) => {
    return (
        <button style={{
            fontWeight: 600,
            fontFamily: '"Manrope", sans-serif',
            fontSize: 16,
            height: 46,
            lineHeight: '100%',
            letterSpacing: 0,
            background: '#1DB606',
            padding: '12px 24px',
            color: 'white',
            borderRadius: 5,
            border: 0,
            cursor: 'pointer',
        }}>{title}</button>
    )
}

export default Button
