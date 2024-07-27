// components/CustomerProfile.tsx
import React from 'react';

const CustomerProfile: React.FC = () => {
  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-4 text-primary">Customer Profile</h2>
      <div className="space-y-4">
        <div className="form-group">
          <label>Name</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="tel" />
        </div>
        <div className="form-group">
          <label>Notes</label>
          <textarea rows={3}></textarea>
        </div>
        <button className="button">Save</button>
      </div>
    </div>
  );
};

export default CustomerProfile;
