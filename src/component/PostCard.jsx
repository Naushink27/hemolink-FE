import Lottie from "lottie-react";

export default function PostCard({ post }) {
  // Safely extract author info
  const authorName = post.Author?.fullName || "Anonymous Donor";
  const authorEmail = post.Author?.email || "No email";
  
  // Use correct field names from your BE
  const imageUrl = post.imageUrl || "https://via.placeholder.com/600x400?text=No+Image";
  const content = post.content || "No content available";

  // Extract blood group from text (smart fallback)
  const bloodGroup = content.match(/(O\+|A\+|B\+|AB\+|O-|A-|B-|AB-)/gi)?.[0] || "Unknown";

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
      {/* Header - User Info */}
      <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-rose-50 to-red-50 border-b">
        <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center shadow-md">
        
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg text-gray-800">{authorName}</h3>
          <p className="text-xs text-gray-500">{authorEmail}</p>
        </div>
        <span className="text-xs text-gray-500">
          {new Date(post.createdAt).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
      </div>

      {/* Image - Now works 100% */}
      <div className="relative">
        <img
          src={imageUrl}
          alt="Blood donation post"
          className="w-full h-96 object-cover"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/600x400/fee2e2/991b1b?text=Image+Not+Found";
          }}
        />

        {/* Blood Group Badge */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-full shadow-2xl border-2 border-red-600">
          <span className="font-bold text-2xl text-red-600">{bloodGroup}</span>
        </div>

        <div className="absolute top-4 right-4 bg-green-600 text-white px-5 py-2 rounded-full font-bold text-sm shadow-lg">
          AVAILABLE TO DONATE
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-800 text-lg leading-relaxed">{content}</p>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="flex-1 bg-green-600 text-white py-3.5 rounded-lg font-bold text-lg hover:bg-green-700 transition shadow-lg">
            Contact Donor
          </button>
          <button className="px-6 py-3.5 border-2 border-green-600 text-green-600 rounded-lg font-bold hover:bg-green-50 transition">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}