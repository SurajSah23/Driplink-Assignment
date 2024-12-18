import PropTypes from 'prop-types';

// Instagram Post Shape Validation
const instagramPostShape = {
  id: PropTypes.string.isRequired,
  mediaUrl: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
};

// Post Link Shape Validation
const postLinkShape = {
  postId: PropTypes.string.isRequired,
  customUrl: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
};

// Usage Example
const MyComponent = ({ instagramPost, postLink }) => (
  <div>
    <h1>Instagram Post</h1>
    <p>{instagramPost.caption}</p>

    <h1>Post Link</h1>
    <p>{postLink.customUrl}</p>
  </div>
);

// PropTypes validation for the props
MyComponent.propTypes = {
  instagramPost: PropTypes.shape(instagramPostShape).isRequired,
  postLink: PropTypes.shape(postLinkShape).isRequired,
};

export default MyComponent;
