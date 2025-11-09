interface PageHeaderProps {
  title: string
  description: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "Baloo 2" }}>
        {title}
      </h1>
      <p className="text-gray-600 mt-1" style={{ fontFamily: "Nunito" }}>
        {description}
      </p>
    </div>
  )
}
