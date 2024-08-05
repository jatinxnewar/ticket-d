export async function connectMetaMask() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        return accounts;
      } catch (error) {
        console.error('Error connecting MetaMask:', error);
        throw error;
      }
    } else {
      alert('MetaMask is not installed. Please install it to proceed.');
      throw new Error('MetaMask not found');
    }
  }
  