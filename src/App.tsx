import React from 'react';
import WalletContextProvider from './components/WalletProvider';
import Header from './components/Header';
import "@solana/wallet-adapter-react-ui/styles.css";
function App() {
  return (
    <WalletContextProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Welcome to DLMM Burn
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Connect your Solana wallet to get started with DLMM token burning
              </p>
            </div>
          </div>
        </main>
      </div>
    </WalletContextProvider>
  );
}

export default App;
