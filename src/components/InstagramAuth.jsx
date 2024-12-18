import { LogIn } from 'lucide-react';
import PropTypes from 'prop-types';

export function InstagramAuth({ onAuth }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center sm:text-4xl">Connect Your Instagram Account</h2>
        <p className="text-gray-600 mb-8 text-center sm:text-lg">
          Link your Instagram business account to manage your posts and custom URLs.
        </p>
        <button
          onClick={onAuth}
          className="flex items-center justify-center gap-3 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg shadow-md hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 transition-all sm:px-6 sm:py-3"
        >
          <LogIn size={20} />
          <span>Connect Instagram</span>
        </button>
      </div>
    </div>
  );
}

// Prop validation using PropTypes
InstagramAuth.propTypes = {
  onAuth: PropTypes.func.isRequired, // `onAuth` should be a function and is required
};

export default InstagramAuth;
