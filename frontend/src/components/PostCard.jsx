import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';

const PostCard = ({ post }) => {
  return (
    <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '1.5rem' }}>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
        <Link to={`/posts/${post._id}`} style={{ color: 'var(--text-primary)' }}>
          {post.title}
        </Link>
      </h3>
      
      <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <User size={14} />
          {post.author?.username || 'Unknown'}
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <Calendar size={14} />
          {new Date(post.createdAt).toLocaleDateString()}
        </span>
      </div>
      
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>
        {post.content.length > 150 ? `${post.content.substring(0, 150)}...` : post.content}
      </p>
      
      <div>
        <Link to={`/posts/${post._id}`} className="text-gradient" style={{ fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
          Read More &rarr;
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
