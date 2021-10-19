import React from "react";
import { shallow } from "enzyme";
import { expect, it } from "@jest/globals";

import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import InfoPage from "./InfoPage";

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

it("should render entire InfoPage Component", () => {
  const wrapper = shallow(
    <Provider store={store}>
      <InfoPage />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
