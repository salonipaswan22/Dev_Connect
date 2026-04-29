import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import api from '../utils/api';
import { useAuth } from '../context/AuthContext';
import { Calendar, User, ArrowLeft, Trash2, Edit } from 'lucide-react';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.get(`/posts/${id}`);
        setPost(response.data);
        setLoading(false);
      } catch (err) {
        setError('Post not found');
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await api.delete(`/posts/${id}`);
        navigate('/');
      } catch (err) {
        alert(err.response?.data?.message || 'Failed to delete post');
      }
    }
  };

  if (loading) {
    return <div className="container" style={{ textAlign: 'center', marginTop: '4rem' }}>Loading...</div>;
  }

  if (error || !post) {
    return (
      <div className="container">
        <div className="alert alert-error">{error}</div>
        <Link to="/" className="btn btn-secondary"><ArrowLeft size={18} /> Back to Home</Link>
      </div>
    );
  }

  const isAuthor = user && user._id === post.author?._id;

  return (
    <div className="container" style={{ maxWidth: '900px' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </div>
      
      <article className="glass-panel" style={{ padding: '3rem', borderTop: '4px solid var(--accent-primary)' }}>
        <header style={{ marginBottom: '2.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem' }}>
          <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem', lineHeight: 1.1 }}>
            {post.title}
          </h1>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-secondary)', fontSize: '1rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <User size={16} />
                {post.author?.username || 'Unknown'}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Calendar size={16} />
                {new Date(post.createdAt).toLocaleDateString()}
              </span>
            </div>
            
            {isAuthor && (
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {/* Note: Update functionality is not fully implemented in UI yet, leaving button for aesthetics */}
                <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>
                  <Edit size={16} /> Edit
                </button>
                <button onClick={handleDelete} className="btn btn-danger" style={{ padding: '0.5rem 1rem' }}>
                  <Trash2 size={16} /> Delete
                </button>
              </div>
            )}
          </div>
        </header>
        
        <div style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-primary)', whiteSpace: 'pre-wrap' }}>
          {post.content}
        </div>
      </article>
    </div>
  );
};

export default PostDetail;
