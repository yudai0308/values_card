import { makeStyles } from '@material-ui/core/styles';
import blueGray from '@material-ui/core/colors/blueGrey';

export const useStyles = makeStyles(theme => ({
  baseField: {
    backgroundColor: blueGray[100],
    width: 700,
    height: 500,
  },
  mainField: {
    backgroundColor: blueGray[100],
    minWidth: 600,
    height: 500,
  },
  sideField: {
    backgroundColor: blueGray[200],
    minWidth: 100,
    height: 500,
  },
}));
