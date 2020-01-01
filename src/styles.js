import { makeStyles } from '@material-ui/core/styles';
import blueGray from '@material-ui/core/colors/blueGrey';
import {field} from './conf';

export const useStyles = makeStyles(theme => ({
  baseField: {
    backgroundColor: blueGray[100],
    width: field.width,
    height: field.height,
  },
  mainField: {
    backgroundColor: blueGray[100],
    minWidth: field.width - field.sideWidth,
    height: field.height,
  },
  sideField: {
    backgroundColor: blueGray[200],
    minWidth: field.sideWidth,
    height: field.height,
  },
}));
