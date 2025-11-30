export default function RadioLabel({
  id,
  name = "preset-radio",
  checked,
  onChange,
  ariaLabel,
  children,
  className = "flex items-center gap-2 text-sm",
}) {
  return (
    <label className={className}>
      <input
        id={id}
        type="radio"
        name={name}
        className="radio radio-success"
        checked={checked}
        onChange={onChange}
        aria-label={ariaLabel}
      />
      {children}
    </label>
  )
}
