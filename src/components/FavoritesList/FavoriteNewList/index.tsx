// Dependencies
import { ReactElement } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Card from '../../Card';

const FavoriteNewList = (): ReactElement => (
  <>
    <Card containerStyle=" bg-blue-100 h-full text-blue-400 flex justify-center items-center">
      <AddIcon size={44} className="text-blue-400" />
    </Card>
    <div className="flex flex-col justify-center items-center mt-4">
      <span className="text-lg text-blue-400 font-medium">Crear una nueva lista</span>
    </div>
  </>
);

export default FavoriteNewList;
