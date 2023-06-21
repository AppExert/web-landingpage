import { createContext, useReducer } from "react";
import Layout from "./layout";

type LayoutProviderProps = { children: React.ReactNode };
type Action = {
  type:
    | "TOGGLE_HEADER"
    | "TOGGLE_FOOTER"
    | "TOGGLE_FOOTER_COPYRIGHT"
    | "TOGGLE_NAV_MENU"
    | "TOGGLE_LOGOUT";
};

type Dispatch = (action: Action) => void;

type LayoutState = {
  header: boolean;
  footer: boolean;
  footerCopyright: boolean;
  navMenu: boolean;
};
const initialState: LayoutState = {
  header: true,
  footer: true,
  footerCopyright: true,
  navMenu: true,
};

const layoutReducer = (state = initialState, action: Action) => {
  switch (action.type) {
  case "TOGGLE_HEADER":
    return {
      ...state,
      header: !state.header,
    };
  case "TOGGLE_FOOTER":
    return {
      ...state,
      footer: !state.footer,
    };
  case "TOGGLE_FOOTER_COPYRIGHT":
    return {
      ...state,
      footerCopyright: !state.footerCopyright,
    };
  case "TOGGLE_NAV_MENU":
    return {
      ...state,
      navMenu: !state.navMenu,
    };
  default:
    return state;
  }
};

export const LayoutContext = createContext<
  | {
      state: LayoutState;
      dispatch: Dispatch;
    }
  | undefined
>(undefined);


const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const [state, dispatch] = useReducer(layoutReducer, initialState);
  const value = { state, dispatch };
  return (
    <LayoutContext.Provider value={value}>
      <Layout>{children}</Layout>
    </LayoutContext.Provider>
  );
};

export { LayoutProvider };
