import './actionButton.css'

export default function ActionButton({ children, text }) {
    return (
        <button className="actionButton">
            <div className="icon-button">
                {children}
            </div>
            {text}
        </button>
    );
}
