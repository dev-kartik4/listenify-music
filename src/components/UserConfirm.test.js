import React from "react";
import { shallow } from "enzyme";
import { expect, it } from "@jest/globals";

import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import UserConfirm from "./UserConfirm";

const mockStore = configureMockStore();
const store = mockStore({
  userData: {
    loading: false,
    users: [],
    user: {},
    error: "",
    isLoggedIn: false,
  },
  songsData: {
    loading: false,
    songs: [],
    error: "",
  },
  playlistData: {
    loading: false,
    playlists: [],
    error: "",
  },
});

it("should render entire UserConfirm Component", () => {
  const wrapper = shallow(
    <Provider store={store}>
      <UserConfirm />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
