export default function Card({ className = "", children, as: As = "div", ...rest }) {
  return (
    <As
      className={`bg-paper border border-line rounded-2xl shadow-soft ${className}`}
      {...rest}
    >
      {children}
    </As>
  );
}
