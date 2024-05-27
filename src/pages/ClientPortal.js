import React, { useState } from 'react';
import axios from 'axios';
import './ClientPortal.css';

const ClientPortal = () => {
  const [bookings, setBookings] = useState([]);
  const [newBooking, setNewBooking] = useState({ date: '', service: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleBookingChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const today = new Date();
    if (selectedDate < today) {
      setError('Please select a future date.');
    } else {
      setError('');
      setNewBooking({ ...newBooking, [e.target.name]: e.target.value });
    }
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('/api/bookings', newBooking);
      setBookings([...bookings, response.data]);
      setNewBooking({ date: '', service: '' });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="portal-wrapper">
      <h2 className="portal-heading">Welcome to Your Client Portal</h2>
      <form className="booking-form" onSubmit={handleBookingSubmit}>
        <label className="booking-label">
          Choose Date:
          <input type="date" name="date" value={newBooking.date} onChange={handleBookingChange} className="booking-input" />
        </label>
        <label className="booking-label">
          Select Service:
          <input type="text" name="service" value={newBooking.service} onChange={handleBookingChange} className="booking-input" placeholder="E.g., Wedding Photography" />
        </label>
        <button type="submit" className={`booking-btn ${loading || !!error ? 'disabled' : ''}`} disabled={loading || !!error}>{loading ? 'Booking...' : 'Book Now'}</button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <div className="booking-list-wrapper">
        <h3 className="booking-list-heading">Your Bookings:</h3>
        <ul className="booking-list">
          {bookings.map((booking, index) => (
            <li key={index} className="booking-item">{booking.date} - {booking.service}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClientPortal;
