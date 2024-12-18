import { useState } from 'react';
import PropTypes from 'prop-types';

// The AddLinkModal component accepts `post`, `onClose`, and `onSave` as props
export function AddLinkModal({ post, onClose, onSave }) {
  const [url, setUrl] = useState('');

  if (!post) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full sm:max-w-md transform transition-all duration-300 scale-95 hover:scale-100">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold text-gray-800">Add Custom URL</h3>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800 text-xl">&times;</button>
        </div>

        <div className="mb-4">
          <img
            src={post.mediaUrl}
            alt={post.caption}
            className="w-full h-48 sm:h-40 object-cover rounded-lg shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Custom URL
          </label>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
          />
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2 text-gray-700 hover:text-gray-900 font-semibold"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onSave(post.id, url);
              onClose();
            }}
            disabled={!url}
            className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

// Prop validation using PropTypes
AddLinkModal.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    mediaUrl: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default AddLinkModal;
