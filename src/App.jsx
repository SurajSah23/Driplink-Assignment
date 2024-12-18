import { useState } from 'react';
import { InstagramAuth } from './components/InstagramAuth';
import { PostGrid } from './components/PostGrid';
import { AddLinkModal } from './components/AddLinkModal';
import { Instagram } from 'lucide-react';

// Mock data - Replace with actual API calls
const MOCK_POSTS = [
  {
    id: '1',
    mediaUrl: 'https://plus.unsplash.com/premium_photo-1669377593804-2270c3436d69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QmVhdXRpZnVsJTIwc3Vuc2V0fGVufDB8fDB8fHww',
    caption: 'Beautiful sunset',
    timestamp: new Date().toISOString(),
  },
  {
    id: '2',
    mediaUrl: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0',
    caption: 'Coffee time',
    timestamp: new Date().toISOString(),
  },
  {
    id: '3',
    mediaUrl: 'https://plus.unsplash.com/premium_vector-1725346177270-cd1abcf45810?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHdvcmslMjBzZXR1cHxlbnwwfHwwfHx8MA%3D%3D',
    caption: 'Work setup',
    timestamp: new Date().toISOString(),
  },
];

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [links, setLinks] = useState([]);

  const handleAuth = () => {
    // Implement actual Instagram authentication here
    setIsAuthenticated(true);
  };

  const handleSaveLink = (postId, url) => {
    setLinks((prevLinks) => [
      ...prevLinks,
      {
        postId,
        customUrl: url,
        timestamp: new Date().toISOString(),
      },
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2">
            <Instagram className="text-purple-600" size={24} />
            <h1 className="text-xl font-bold text-gray-900">
              Instagram Link Manager
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!isAuthenticated ? (
          <InstagramAuth onAuth={handleAuth} />
        ) : (
          <>
            <PostGrid posts={MOCK_POSTS} onSelectPost={setSelectedPost} />

            {selectedPost && (
              <AddLinkModal
                post={selectedPost}
                onClose={() => setSelectedPost(null)}
                onSave={handleSaveLink}
              />
            )}

            {links.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Saved Links</h2>
                <div className="bg-white rounded-lg shadow">
                  {links.map((link) => {
                    const post = MOCK_POSTS.find((p) => p.id === link.postId);
                    return (
                      <div
                        key={link.postId}
                        className="flex items-center gap-4 p-4 border-b last:border-b-0"
                      >
                        <img
                          src={post?.mediaUrl}
                          alt={post?.caption}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div>
                          <p className="text-sm text-gray-500">{post?.caption}</p>
                          <a
                            href={link.customUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-700"
                          >
                            {link.customUrl}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
