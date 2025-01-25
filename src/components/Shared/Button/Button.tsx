
interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

export const PrimaryButton: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <button className="px-3 py-1 bg-blue-600 text-white rounded" onClick={onClick}>
            {children}
        </button>
    );
};

export const WarningButton: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <button className="px-3 py-1 bg-orange-600 text-white rounded" onClick={onClick}>
            {children}
        </button>
    );
};

export const ErrorButton: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <button className="px-3 py-1 bg-rose-600 text-white rounded" onClick={onClick}>
            {children}
        </button>
    );
};