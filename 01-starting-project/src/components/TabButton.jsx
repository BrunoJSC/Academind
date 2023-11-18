export function TabButton({ children, onSelect, isSelected, ...rest }) {
  return (
    <li>
      <button
        className={isSelected ? "active" : undefined}
        onClick={onSelect}
        {...rest}
      >
        {children}
      </button>
    </li>
  );
}
