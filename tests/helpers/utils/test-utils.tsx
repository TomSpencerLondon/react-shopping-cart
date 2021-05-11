import React, {ReactNode} from 'react';
import '@testing-library/jest-dom/extend-expect';
import {act, render} from '@testing-library/react';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../../../src/App';
import AuthContextProvider from "../../../src/Auth/providers/AuthContext";

export const renderAct = async (Component: ReactNode) => {
  await act(async () => {
    customRender(<>{Component}</>);
  });
};

export const wrapperWithQueryClient = ({ children }: any) => (
  <AuthContextProvider>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </AuthContextProvider>
);
const customRender = (ui: any, options = {}): unknown =>
  render(ui, { wrapper: wrapperWithQueryClient, ...options });
export * from '@testing-library/react';
export * from '@testing-library/user-event';
export { customRender as render };
