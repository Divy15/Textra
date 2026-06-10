

export const StatCard: React.FC<{ 
  title: string; 
  count: number; 
  description: string; 
  icon: React.ReactNode 
}> = ({ title, count, description, icon }) => (
  <div className="bg-white p-6 rounded-xl border border-camel/20 shadow-sm flex items-start justify-between transition-all hover:border-camel/40">
    <div className="space-y-2">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{title}</p>
      <h3 className="text-3xl font-bold text-burgundy tracking-tight">{count}</h3>
      <p className="text-xs text-gray-400">{description}</p>
    </div>
    <div className="p-3 bg-off-white rounded-lg border border-camel/10 text-camel">
      {icon}
    </div>
  </div>
);