// ModalComponent.js
import React, { useState, useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';

function ModalComponent({ isOpen, onRequestClose }) {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const initProvider = async () => {
      const provider = await detectEthereumProvider();
      if (provider) {
        setProvider(provider);
      } else {
        console.error('Please install MetaMask!');
      }
    };
    initProvider();
  }, []);

  const connectWallet = async () => {
    if (!provider) {
      console.error('No provider found');
      return;
    }

    setLoading(true);
    try {
      const accounts = await provider.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
      // Optionally, you might want to also handle provider events or further integration here
      onRequestClose();
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <h2 className="text-lg font-semibold mb-4">Connect Your Wallet</h2>
        <button
          onClick={connectWallet}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Connecting...' : 'Connect MetaMask'}
        </button>
        <button
          onClick={onRequestClose}
          className="w-full mt-4 py-2 px-4 bg-gray-300 rounded-md hover:bg-gray-400"
        >
          Cancel
        </button>
        {account && <p className="mt-4">Connected Account: {account}</p>}
      </div>
    </div>
  );
}

export default ModalComponent;
