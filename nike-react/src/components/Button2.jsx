function Button2({ label, variant, size }) {
  return <button className={`btn-${variant} size-${size}`}>{label}</button>;
}

export default Button2;
