import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './actions';
import { REQUEST_ROBOTS_PENDING } from './constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Fetch robots action PENDING", () => {
  it("should create a Pending action on request Robots", () => {
    const store = mockStore({});
    return store.dispatch(actions.requestRobots())
      .then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({ type: REQUEST_ROBOTS_PENDING });
      });
  });
});