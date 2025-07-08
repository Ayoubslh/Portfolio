export default function TechCard({ icon: Icon, name, color }) {
  const isImage = typeof Icon === "string";

  return (
    <div className="bg-gray-900 rounded-xl p-6 shadow-md flex flex-col items-center justify-center gap-3 transition duration-300 border border-gray-800 hover:border-amber-300 hover:shadow-[0_0_20px_#f0abfc] hover:scale-105">
      {isImage ? (
        <img src={Icon} alt={name} className="w-12 h-12 object-contain" />
      ) : (
        <Icon className="text-4xl" style={{ color }} />
      )}
      <span className="text-sm font-medium text-white">{name}</span>
    </div>
  );
}
