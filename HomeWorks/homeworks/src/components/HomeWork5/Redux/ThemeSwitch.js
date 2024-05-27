import { useSelector, useDispatch } from 'react-redux';
import Switch from '@mui/material/Switch';
import './ThemeSwitch.css';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function ThemeSwitch() {
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();

    const handleToogleTheme = () => {
        dispatch({ type: 'TOOGLE_THEME' });
    }

    return (
        <div className={`theme-switcher-box ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
            <p>Current theme: {theme}</p>
            <div className='switcher-wrap'>
                <span>Switch theme</span>
                <Switch {...label} onClick={handleToogleTheme} />
            </div>
        </div>
    );
}

export default ThemeSwitch;