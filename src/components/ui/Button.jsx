import { Link } from "react-router-dom";

const base =
  "inline-flex items-center gap-2 font-medium text-sm md:text-base rounded-full px-5 py-3 transition-colors";

const variants = {
  primary:
    "bg-terra text-sand font-semibold shadow-[0_10px_30px_-12px_rgba(231,169,142,0.6)] hover:bg-terraDeep",
  outline:
    "border border-inkSoft/45 text-ink hover:border-terra hover:text-terraDeep hover:bg-terra/5",
  link: "text-terraDeep hover:text-terra underline-offset-4 hover:underline px-0 py-0 rounded-none",
  ghost: "text-ink hover:text-terraDeep px-0 py-0 rounded-none",
};

export default function Button({
  to,
  href,
  external,
  variant = "primary",
  children,
  className = "",
  ...rest
}) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    const ext = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
    return (
      <a href={href} className={cls} {...ext} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
