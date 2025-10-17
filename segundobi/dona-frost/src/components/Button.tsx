import "../styles/button.css";

interface IButtonProps {
    text: string;
    secondary?: boolean;
    handleFunction?: Function;
}

export default function Button({ text, secondary, handleFunction }: IButtonProps) {
    return (
        <button className={secondary ? "btn-secondary" : "btn-primary"}
            onClick={handleFunction ? () => handleFunction() : () => false}>
            {text}
        </button>
    )
}