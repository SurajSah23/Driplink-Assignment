import { Plus } from 'lucide-react';
import PropTypes from 'prop-types';

export function PostGrid({ posts, onSelectPost }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6">
      {posts.map((post) => (
        <div key={post.id} className="relative group rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition-all duration-300">
          <img
            src={post.mediaUrl}
            alt={post.caption}
            className="w-full h-56 sm:h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
            <button
              onClick={() => onSelectPost(post)}
              className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white text-gray-900 rounded-lg shadow-lg hover:bg-gray-200 text-lg"
            >
              <Plus size={22} />
              Add URL
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

// PropTypes validation
PostGrid.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      mediaUrl: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelectPost: PropTypes.func.isRequired,
};

export default PostGrid;
