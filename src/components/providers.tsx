import {RecoilRoot} from 'recoil';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const queryClient = new QueryClient()


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
    <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
                {children}
        </ChakraProvider>
    </QueryClientProvider>
</RecoilRoot>)

export default Providers