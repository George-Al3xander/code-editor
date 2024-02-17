import {RecoilRoot} from 'recoil';

import { ReactNode } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';



const theme = extendTheme({
    colors: {
        vscode: {
            primary: "#007acc",
            secondary: "#3e3e42",
            accent: " #2d2d30",
            bg: "#1e1e1e"
        }
    },
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },
   
})




const Providers = ({children}:{children: ReactNode}) => (<RecoilRoot>
        <ChakraProvider theme={theme}>
                {children}
        </ChakraProvider>
</RecoilRoot>)  

export default Providers