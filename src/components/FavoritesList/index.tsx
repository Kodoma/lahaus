import React from 'react';

import { realStateClient } from "../../services/real-states.service";
import { RealStates } from "../../models";

import FavoriteDetail from "./FavoriteDetail";
import FavoriteNewList from "./FavoriteNewList";

const FavoritesList: React.FunctionComponent = () => {
  const [realStates, setRealStates] = React.useState(initialRealState);

  React.useEffect(() => {
      realStateClient.getList().then(result => {
          setRealStates(result);
      })
  }, []);

  return (
    <div className="favorite-container">
      {realStates && realStates.estates.map(({ id, name, images }: any) => (
        <div className="favorite-container--card-container" key={id}>
            <FavoriteDetail images={images} name={name} />
        </div>
      ))}
      <div className="favorite-container--new-item">
          <FavoriteNewList />
      </div>
    </div>
  );
};

export default FavoritesList;

const initialRealState:RealStates = {
    estates: [],
    included: {},
}