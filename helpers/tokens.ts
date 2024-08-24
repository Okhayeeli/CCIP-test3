export interface Token {
    tokenAddress: string;
    holderAddress: string;
}

export function getTokenInfo(tokenName: string): Token {
    const tokens: Record<string, Token> = {
        //All token address from avalanche fuji
        usdc: {
            tokenAddress: "0x5425890298aed601595a70ab815c96711a31bc6", 
            holderAddress: "0x1FC9a1623060a5d38864BC2725156fE465642b28"  
        },
        link: {
            tokenAddress: "0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846", 
            holderAddress: "0x84312D42FDD64eAAd0b14C611397655603895BcA"  
        },

    };

    const tokenInfo = tokens[tokenName.toLowerCase()];

    if (!tokenInfo) {
        throw new Error(`Token information for ${tokenName} not found`);
    }

    return tokenInfo;
}
