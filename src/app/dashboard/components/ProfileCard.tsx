// Profile Card Component
export const ProfileCard = ({ name, type, followers, audienceOverlap, synergyScore, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-gray-600">{type}</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-600">{followers} followers</span>
        </div>
        
        <div className="mb-4">
          <div className="text-sm text-gray-600 mb-1">Audience Overlap: {audienceOverlap}</div>
          {synergyScore && (
            <div className="text-sm text-gray-600">Synergy Score™: {synergyScore}</div>
          )}
        </div>
        
        <div className="flex space-x-2">
          <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
            View Profile
          </button>
          <button className="flex-1 bg-gray-900 text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            Suggest Collab
          </button>
        </div>
      </div>
    </div>
  );
};