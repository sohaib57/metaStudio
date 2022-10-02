import React, { createContext, useState } from 'react'
import { ethers } from 'ethers';



const ContextWallet = createContext();

export function WalletConnectCanvas({ children }) {
    const [walletAddress, setWalletAddress] = useState(null)


    const connectWallet = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const address = await provider.send("eth_requestAccounts", []);
        setWalletAddress(address)
    }
    console.log(walletAddress)

    return (        
        <ContextWallet.Provider value={{connectWallet , walletAddress}}>
            {children}  
        </ContextWallet.Provider>
    )
}

export default ContextWallet