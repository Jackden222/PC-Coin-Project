import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import TransactionCard from '../components/TransactionCard';

const Airdrop = () => {
  const [tg, setTg] = useState(null);
  const [walletAddress, setWalletAddress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const telegram = window.Telegram.WebApp;
    setTg(telegram);
    telegram.ready();
  }, []);

  const connectWallet = async () => {
    try {
      setLoading(true);
      if (tg) {
        const address = await tg.sendTonAddressRequest();
        setWalletAddress(address);
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
      if (tg) {
        tg.showAlert(`Error: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const sendTransaction = async () => {
    try {
      setLoading(true);
      if (tg && walletAddress) {
        const result = await tg.sendTonTransaction({
          address: walletAddress,
          amount: '1000000000', // amount in nanotons
          comment: 'Test transaction'
        });
        tg.showAlert('Transaction successful!');
      }
    } catch (error) {
      console.error('Transaction error:', error);
      if (tg) {
        tg.showAlert(`Error: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Telegram Wallet
          </h2>

          {loading && <LoadingSpinner />}

          {!walletAddress ? (
            <button
              onClick={connectWallet}
              disabled={loading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Connecting...' : 'Connect Wallet'}
            </button>
          ) : (
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-md p-4">
                <p className="text-sm text-gray-600">Connected Wallet:</p>
                <p className="text-sm font-mono break-all">{walletAddress}</p>
              </div>

              <button
                onClick={sendTransaction}
                disabled={loading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : 'Send Transaction'}
              </button>
            </div>
          )}
        </div>

        {/* Transaction History Section */}
        <div className="mt-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Transaction History
          </h3>
          <div className="space-y-2">
            {transactions.length > 0 ? (
              transactions.map((transaction, index) => (
                <TransactionCard key={index} transaction={transaction} />
              ))
            ) : (
              <div className="bg-gray-50 rounded-md p-4">
                <p className="text-sm text-gray-600">No transactions yet</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Airdrop;