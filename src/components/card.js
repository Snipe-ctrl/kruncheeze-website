export default function Card({ children, className = "" }) {
  return (
    <div className={`rounded-lg border bg-white text-black shadow-sm ${className}`}>
      {children}
    </div>
  )
}