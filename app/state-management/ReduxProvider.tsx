"use client"; // Duhet të ekzekutohet në klient

import { Provider } from "react-redux";
import store from "../store"; // Kontrollo rrugën e saktë

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
