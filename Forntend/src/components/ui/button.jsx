
export default function Button({ children, type = 'text', className = "", ...props }) {
  return (
    <button
      type={type}
      className={
        `px-4 py-2 rounded-md font-medium ${className}`
      }
      {...props}
    >
      {children}
    </button>
  );
}
