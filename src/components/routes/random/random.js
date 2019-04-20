import { useActions, useDispatch, useStore } from "easy-peasy";
import { useEffect } from "react";
import { push } from "redux-first-history";

export const Random = () => {
  const randomId = useStore(state => state.catalog.randomId);
  const fetchRandom = useActions(actions => actions.catalog.fetchRandom);
  const dispatch = useDispatch();

  useEffect(() => {
    if (randomId) {
      dispatch(push(`/beer/${randomId}`));
    } else {
      fetchRandom();
    }
  }, [dispatch, fetchRandom, randomId]);

  return null;
};

Random.propTypes = {};
