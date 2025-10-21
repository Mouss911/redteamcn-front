import React from "react"

interface BoutonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "ghost" | "outline"
  size?: "icon" | "normal"
}

export const Bouton: React.FC<BoutonProps> = ({
  variant = "outline",
  size = "normal",
  className = "",
  ...props
}) => {
  let classes = "px-4 py-2 rounded " + className
  if (variant === "ghost") classes += " bg-transparent"
  if (variant === "outline") classes += " border"
  if (size === "icon") classes += " w-8 h-8 flex items-center justify-center"
  return <button className={classes} {...props} />
}