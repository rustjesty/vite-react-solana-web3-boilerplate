import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';

const Header: React.FC = () => {
  const { connected, publicKey, disconnect, wallets } = useWallet();
  const { setVisible } = useWalletModal();

  console.log("Header - connected:", connected);
  console.log("Header - publicKey:", publicKey);
  console.log("Header - available wallets:", wallets);

  const handleWalletAction = () => {
    if (connected) {
      disconnect();
    } else {
      setVisible(true);
    }
  };

  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-6">
            <h1 className="text-white text-2xl font-bold tracking-tight">
              DLMM Locker / Burner
            </h1>
            {connected && publicKey && (
              <div className="text-white text-sm">
                {publicKey.toString().slice(0, 4)}...{publicKey.toString().slice(-4)}
              </div>
            )}
          </div>
          
          <button 
            onClick={handleWalletAction}
            className="bg-white/10 border-2 border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
          >
            {connected ? 'Disconnect' : 'Connect Wallet'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 