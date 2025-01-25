// Desc: Button component for the application
interface ButtonProps {
    onClick: () => void;
    type: "submit" | "reset" | "button" | undefined;
    children: React.ReactNode | undefined;
}

export const PrimaryButton: React.FC<ButtonProps> = ({ onClick, children, type }) => {
    return (
        <button type={type} className="px-3 py-1 bg-blue-600 text-white text-sm outline-none rounded hover:opacity-90 transition-all duration-150 active:scale-95 active:opacity-100" onClick={onClick}>
            {children}
        </button>
    );
};

export const WarningButton: React.FC<ButtonProps> = ({ onClick, children, type }) => {
    return (
        <button type={type} className="px-3 py-1 bg-orange-600 text-white text-sm outline-none rounded hover:opacity-90 transition-all duration-150 active:scale-95 active:opacity-100" onClick={onClick}>
            {children}
        </button>
    );
};

export const ErrorButton: React.FC<ButtonProps> = ({ onClick, children, type }) => {
    return (
        <button type={type} className="px-3 py-1 bg-rose-600 text-white text-sm outline-none rounded hover:opacity-90 transition-all duration-150 active:scale-95 active:opacity-100" onClick={onClick}>
            {children}
        </button>
    );
};
export const EditButton: React.FC<ButtonProps> = ({ onClick, type, children }) => {
    return (
        <button type={type} className="p-1 bg-rose-600 text-white text-sm outline-none rounded hover:opacity-90 transition-all duration-150 active:scale-95 active:opacity-100" onClick={onClick}>
            {children}
        </button>
    );
};