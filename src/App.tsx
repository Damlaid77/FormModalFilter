import { CircularProgress, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import { MuiCard } from './MuiCard';
import { MuiChip } from './MuiChip';
import { MuiLayout } from './MuiLayout';
import { MuiList } from './MuiList';
import { MuiAccordion } from './components/MuiAccordion';
import { MuiAlert } from './components/MuiAlert';
import { MuiAutoComplete } from './components/MuiAutoComplete';
import { MuiAvatar } from './components/MuiAvatar';
import { MuiBadge } from './components/MuiBadge';
import { MuiBottomNavigation } from './components/MuiBottomNavigation';
import { MuiBreadcrumbs } from './components/MuiBreadcrumbs';
import { MuiButton } from './components/MuiButton';
import { MuiCheckbox } from './components/MuiCheckbox';
import { MuiDialog } from './components/MuiDialog';
import { MuiDrawer } from './components/MuiDrawer';
import { MuiLink } from './components/MuiLink';
import { MuiLmagelist } from './components/MuiLmagelist';
import { MuiNavbar } from './components/MuiNavbar';
import { MuiRadioButton } from './components/MuiRadioButton';
import { MuiRating } from './components/MuiRating';
import { MuiSelect } from './components/MuiSelect';
import { MuiSnackbar } from './components/MuiSnackbar';
import { MuiSpeedDial } from './components/MuiSpeedDial';
import { MuiSwitch } from './components/MuiSwitch';
import { MuiTextField } from './components/MuiTextField';
import { MuiTooltip } from './components/MuiTooltip';
import { MuiTypography } from './components/MuiTypography';
import { MuiSkeleton } from './components/MuiSkeleton';
import { MuiLoadingButton } from './components/MuiLoadingButton';
import { MuiPicker } from './components/MuiPicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/lab';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { MuiDateRangePicker } from './components/MuiDateRangePicker';
import { MuiTab } from './components/MuiTab';
import { MuiTimeLine } from './components/MuiTimeLine';
import { MuiMasonry } from './components/MuiMasonry';
import { MuiResponsiveness } from './components/MuiResponsiveness';
import { Form1 } from './hook-form/form1';
import { Provider } from 'react-redux';
import { store } from './modal-form/store/store';
import { FilterListPage } from './modal-form/filter-list-page';

const theme = createTheme({

})

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div className="App">
              <div>
                {/* <MuiTypography/> */}
                {/* <MuiTextField/> */}
                {/* <MuiButton/> */}
                {/* <MuiSelect/> */}
                {/* <MuiRadioButton/>
                <MuiCheckbox/> */}
                {/* <MuiSwitch/> */}
                {/* <MuiRating/> */}
                {/* <MuiAutoComplete/> */}
                {/* <MuiLayout/> */}
                {/* <MuiCard/> */}
                {/* <MuiLmagelist/>
                <MuiAccordion/> */}
                {/* <MuiLink/> */}
                {/* <MuiBreadcrumbs/> */}
                {/* <MuiDrawer/> */}
                {/* <MuiSpeedDial/> */}
                {/* <MuiAvatar/> */}
                {/* <MuiBottomNavigation/> */}
                {/* <MuiBadge/> */}
                {/* <MuiList/> */}
                {/* <MuiChip/> */}
                {/* <MuiTooltip/> */}
                {/* <MuiAlert/> */}
                {/* <MuiSnackbar/> */}
                {/* <MuiDialog/>   */}
                {/* <CircularProgress/> */}
                {/* <MuiSkeleton/> */}
                {/* <MuiLoadingButton/> */}
                {/* <MuiPicker/> */}
                {/* <MuiDateRangePicker/> */}
                {/* <MuiTab/> */}
                {/* <MuiTimeLine/>
                <MuiMasonry/> */}
                {/* <MuiResponsiveness/> */}
                {/* <Form/> */}
                {/* <Form/> */}
                {/* <Form1/> */}
                {/* <FilterListItems/> */}
              </div>
              <MuiNavbar/>
              <FilterListPage/>
            </div>
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
