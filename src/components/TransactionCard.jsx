import React from 'react';

const TransactionCard = ({ transaction }) => (
  <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow duration-200">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm font-medium text-gray-900">
          {transaction.type}
        </p>
        <p className="text-xs text-gray-500">
          {transaction.date}
        </p>
      </div>
      <span className={`px-2 py-1 text-xs rounded-full ${
        transaction.status === 'completed' 
          ? 'bg-green-100 text-green-800'
          : 'bg-yellow-100 text-yellow-800'
      }`}>
        {transaction.status}
      </span>
    </div>
    <div className="mt-2">
      <p className="text-xs text-gray-600">Amount:</p>
      <p className="text-sm font-mono">{transaction.amount} TON</p>
    </div>
  </div>
);

export default TransactionCard;