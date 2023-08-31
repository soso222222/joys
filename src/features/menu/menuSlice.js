import { createSlice } from "@reduxjs/toolkit";
import Menu from "../../Components/UI/organisms/TopMenu/Menu";
const initialState = {
    mneuItems: Menu().map((i) => {
        return i
            ? {
                  ...i,
                  depth: i.depth
                      ?.sort((a, b) => {
                          if (a.title > b.title) return 1;
                          else if (b.title > a.title) return -1;
                          else return 0;
                      })
                      .map((j) => {
                          return {
                              title: j.title,
                              url: j.url,
                          };
                      }),
              }
            : i;
    }),
    seletedUrl: "",
};

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        onClickMenu: (state, { payload }) => {
            state.mneuItems = state.mneuItems.map((i) =>
                i.title === payload ? { ...i, isActive: !i.isActive } : i
            );
        },
        setLocation: (state, { payload }) => {
            state.seletedUrl = payload;
        },
    },
});

export const getMenu = (state) => state.menu.mneuItems;
export const getMenuState = (state) => state.menu;
export const { onClickMenu, setLocation, testFn } = menuSlice.actions;
export default menuSlice;
