export function Button({ children, ...props }) {
  return <button className="bg-[#8b0000] text-gold-100 px-4 py-2 rounded text-white hover:bg-red-800 transition" {...props}>{children}</button>;
}
