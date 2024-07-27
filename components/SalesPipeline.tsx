// components/SalesPipeline.tsx
import React from 'react';

const SalesPipeline: React.FC = () => {
  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-4 text-primary">Sales Pipeline</h2>
      <div className="space-y-4">
        <div className="bg-secondary-light p-4 rounded-lg shadow-md">
          <h3 className="font-medium text-primary">Lead Name</h3>
          <p>Status: New</p>
          <p>Probability: 20%</p>
          <button className="mt-2 text-primary hover:underline">
            View Details
          </button>
        </div>
        <div className="bg-secondary-light p-4 rounded-lg shadow-md">
          <h3 className="font-medium text-primary">Lead Name</h3>
          <p>Status: Contacted</p>
          <p>Probability: 50%</p>
          <button className="mt-2 text-primary hover:underline">
            View Details
          </button>
        </div>
        <div className="bg-secondary-light p-4 rounded-lg shadow-md">
          <h3 className="font-medium text-primary">Lead Name</h3>
          <p>Status: Proposal Sent</p>
          <p>Probability: 80%</p>
          <button className="mt-2 text-primary hover:underline">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalesPipeline;
