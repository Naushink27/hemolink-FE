import { useEffect, useState } from "react";
import NavbarPatient from "../component/Navbar_patient";
import PostCard from "../component/PostCard";
import Footer from "../component/Footer";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

export default function PatientDashboard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(BASE_URL+"/api/patients/allposts", {withCredentials:true});

        // Extract posts from { message, posts } format
        const fetchedPosts = res.data.posts || [];
        console.log(fetchPosts)

        // Sort by latest first
        const sorted = fetchedPosts.sort((a, b) => 
          new Date(b.createdAt) - new Date(a.createdAt)
        );

        setPosts(sorted);
      } catch (err) {
        setError("Failed to load posts. Please try again later.");
        console.error("Error fetching posts:", err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-red-100 flex flex-col">
      <NavbarPatient />

      <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-10">
        <h1 className="text-4xl font-bold text-center text-red-700 mb-10">
          Blood Donation Feed
        </h1>

        {loading && (
          <div className="flex justify-center py-20">
            <div className="animate-spin w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full"></div>
          </div>
        )}

        {error && (
          <div className="text-center py-10">
            <p className="text-red-600 font-semibold text-lg">{error}</p>
          </div>
        )}

        {!loading && posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">No posts yet. Be the first to help!</p>
          </div>
        )}

        <div className="space-y-8">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}