export default function TechCard({ icon: Icon, name, color }) {
  const isImage = typeof Icon === "string";

  return (
    <div className="glass-card px-6 py-4 flex items-center gap-3 min-w-[180px] group hover-glow">
      {isImage ? (
        <img 
          src={Icon} 
          alt={name} 
          className="w-10 h-10 object-contain flex-shrink-0" 
        />
      ) : (
        <Icon 
          className="text-4xl flex-shrink-0" 
          style={{ color }} 
        />
      )}
      <span className="text-sm font-semibold text-white whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}
