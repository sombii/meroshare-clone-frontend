import routes from "./routes";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined"
import InsertChartOutlinedRoundedIcon from '@material-ui/icons/InsertChartOutlinedRounded';
import LanguageIcon from '@material-ui/icons/Language';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import HistoryIcon from '@material-ui/icons/History';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';


const menuItems = [
    {title: 'Dashboard', icon: <HomeOutlinedIcon/>, route: routes.dashboard},
    {title: 'My Details', icon: <AccountBoxOutlinedIcon/>, route: routes.details},
    {title: 'My Shares', icon: <InsertChartOutlinedRoundedIcon/>, route: routes.shares},
    {title: 'My Transaction History', icon: <HistoryIcon/>, route: routes.transaction},
    {title: 'My Portfolio', icon: <AssignmentIndOutlinedIcon/>, route: routes.portfolio},
    {title: 'My Pledge Share Details', icon: <AssignmentTurnedInOutlinedIcon/>, route: routes.pledgeShare},
    {title: 'My Bank Request', icon: <AccountBalanceOutlinedIcon/>, route: routes.bank},
    {title: 'My ASBA', icon: <LanguageIcon/>, route: routes.asba},
    {title: 'My Purchase Source', icon: <ShoppingBasketOutlinedIcon/>, route: routes.purchase},
    {title: 'My EDIS', icon: <CompareArrowsIcon/>, route: routes.edis}
]
export default menuItems;