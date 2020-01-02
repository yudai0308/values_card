import { makeStyles } from '@material-ui/core/styles';
import blueGray from '@material-ui/core/colors/blueGrey';
import { field } from './conf';

export const useFieldStyles = makeStyles(theme => ({
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

export const useHandStyles = makeStyles(theme => ({
  vCards: {
    display: 'flex',
    '& > *': {
      margin: 3,
      width: theme.spacing(8),
      height: theme.spacing(10),
      padding: 3,
    },
  },
  hCards: {
    display: 'flex',
    '& > *': {
      margin: 3,
      width: theme.spacing(10),
      height: theme.spacing(8),
      padding: 3,
    },
  },
}));
