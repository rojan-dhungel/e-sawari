interface PageHeaderProps {
  title: string
  description: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-4 sm:mb-5 md:mb-6">
      <h1 
        className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-1.5" 
        style={{ 
          color: "var(--dark-heading)",
          fontFamily: "var(--font-heading)" 
        }}
      >
        {title}
      </h1>
      <p 
        className="text-xs sm:text-sm md:text-base" 
        style={{ 
          color: "var(--text-dark)",
          fontFamily: "var(--font-body)" 
        }}
      >
        {description}
      </p>
    </div>
  )
}