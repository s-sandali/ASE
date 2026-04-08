import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { useAuth } from '../context/AuthContext';

export default function Cart() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [checkingOut, setCheckingOut] = useState(false);
  const [orderDone, setOrderDone] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    fetchCart();
  }, [isAuthenticated]);

  const fetchCart = async () => {
    setLoading(true);
    try {
      const res = await api.get('/cart/');
      setCart(res.data);
    } catch {
      setError('Failed to load cart.');
    } finally {
      setLoading(false);
    }
  };

  const removeItem = async (itemId) => {
    try {
      await api.delete(`/cart/items/${itemId}`);
      fetchCart();
    } catch {
      setError('Failed to remove item.');
    }
  };

  const checkout = async () => {
    setCheckingOut(true);
    setError('');
    try {
      await api.post('/checkout/');
      setOrderDone(true);
    } catch (err) {
      setError(err.response?.data?.detail || 'Checkout failed.');
    } finally {
      setCheckingOut(false);
    }
  };

  if (loading) return <p className="status-text">Loading cart...</p>;

  if (orderDone) {
    return (
      <div className="page-center">
        <h2>Order Placed!</h2>
        <p>Thank you for your purchase.</p>
        <button className="btn btn-primary" onClick={() => navigate('/products')}>
          Continue Shopping
        </button>
      </div>
    );
  }

  const items = cart?.items ?? [];
  const total = items.reduce(
    (sum, item) => sum + Number(item.product.price) * item.quantity,
    0
  );

  return (
    <div>
      <h2>Your Cart</h2>
      {error && <p className="error">{error}</p>}
      {items.length === 0 ? (
        <div className="page-center">
          <p>Your cart is empty.</p>
          <button className="btn btn-primary" onClick={() => navigate('/products')}>
            Browse Products
          </button>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <div>
                  <strong>{item.product.name}</strong>
                  <span className="cart-item-meta">
                    ${Number(item.product.price).toFixed(2)} &times; {item.quantity}
                  </span>
                </div>
                <div className="cart-item-right">
                  <span className="price">
                    ${(Number(item.product.price) * item.quantity).toFixed(2)}
                  </span>
                  <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-footer">
            <strong>Total: ${total.toFixed(2)}</strong>
            <button
              className="btn btn-primary"
              onClick={checkout}
              disabled={checkingOut}
            >
              {checkingOut ? 'Processing...' : 'Checkout'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
