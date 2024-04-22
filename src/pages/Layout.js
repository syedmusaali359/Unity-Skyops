import { Outlet, Link } from "react-router-dom";
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import InventoryIcon from '@mui/icons-material/Inventory';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CommentBankIcon from '@mui/icons-material/CommentBank';
import OpacityIcon from '@mui/icons-material/Opacity';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import StoreIcon from '@mui/icons-material/Store';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import HealthyRelationshipIcon from '@mui/icons-material/VolunteerActivism';
let apps = [
  {
    name: ' Showroom',
    url: '/showroom',
    icon: TimeToLeaveIcon,
  },
  {
    name: 'Stickball Mall',
    url: '/mall',
    icon: LocalMallIcon,
  },
  {
    name: 'Financial Advisors',
    url: '/financial-advisor',
    icon: AccountBalanceWalletIcon,
  },
  {
    name: 'Grocery Store',
    url: '/grocery-store',
    icon: LocalGroceryStoreIcon,
  },
  {
    name: "Doctor's Office",
    url: '/doctor-office',
    icon: MedicationLiquidIcon,
  },
  {
    name: 'Hospital',
    url: '/hospital',
    icon: LocalHospitalIcon,
  },
  {
    name: 'Human Resources',
    url: '/human-resources',
    icon: Diversity3Icon,
  },
  {
    name: 'Grocery Stock',
    url: '/grocery-stock',
    icon: InventoryIcon,
  },
  {
    name: 'PNC Bank',
    url: '/personal-banking',
    icon: AccountBalanceIcon,
  },
  {
    name: 'Banking Roles',
    url: '/banking-roles',
    icon: CommentBankIcon,
  },
  {
    name: 'First Tech',
    url: '/first-tech',
    icon: AccountBalanceIcon,
  },
  {
    name: 'Musketeers Mall',
    url: '/musketeers-mall',
    icon: LocalMallIcon,
  },
  {
    name: 'Stickball Bank',
    url: '/stickball-bank',
    icon: AccountBalanceIcon,
  },
  {
    name: 'Fidelity Investments',
    url: '/fidelity-investments',
    icon: OpacityIcon,
  },
  {
    name: 'Stickball Company',
    url: '/stickball-company',
    icon: CorporateFareIcon,
  },
  {
    name: 'Stickball Apartments',
    url: '/stickball-apartments',
    icon: ApartmentIcon,
  },
  {
    name: 'Smart Shopping Mall',
    url: '/smart-shop-mall',
    icon: ShoppingCartIcon,
  },
  {
    name: 'Stickball Office',
    url: '/polygon-office',
    icon: ApartmentIcon,
  },
  {
    name: 'Stickball School',
    url: '/school',
    icon: SchoolIcon,
  },
  {
    name: 'Careers',
    url: '/careers',
    icon: WorkIcon,
  },
  {
    name: 'Stickball Business',
    url: '/business',
    icon: StoreIcon,
  },
  {
    name: 'Jobs',
    url: '/jobs',
    icon: WorkRoundedIcon,
  },
  {
    name: 'Investing',
    url: '/investing',
    icon: LightbulbRoundedIcon,
  },
  {
    name: 'Job Performance',
    url: '/job-performance',
    icon: WorkRoundedIcon,
  },
  {
    name: 'Brookline Bank',
    url: '/brookline-bank',
    icon: AccountBalanceIcon,
  },
  {
    name: 'Passumpsic Bank',
    url: '/passumpsic-bank',
    icon: AccountBalanceIcon
  },
  {
    name: 'St. Vincents Thrift',
    url: '/vincents-thrift',
    icon: WorkRoundedIcon
  },
  {
    name: 'Fast Food Cashier',
    url: 'fast-food',
    icon: StoreIcon
  },
  {
    name: 'Matter Port',
    url: 'matter-port',
    icon: ThreeDRotationIcon
  },
  {
    name: 'Save Mart',
    url: 'save-mart',
    icon: StoreIcon
  },
  {
    name: 'Direct to Work Program',
    url: 'direct-to-work-program',
    icon: DirectionsBikeIcon
  },
  {
    name: 'Healthy Relationships',
    url: 'healthy-relationship',
    icon: HealthyRelationshipIcon
  },
]

const Layout = () => {
  return (
    <div className="container">
      <h2 className="meta-head">Metaverse Apps</h2>
      <p className="meta-para">
        The Metaverse is a spatial computing platform that provides digital experiences as an alternative to or a replica of the real world, along with its key civilizational aspects
        like social interactions, currency, trade, economy, and property ownership-founded on a bedrock of blockchain technology
      </p>
      <nav>
        <ul className="layout">
          {
            apps.map(app => {
              return (
                <li>
                  <Link style={{ color: '#616ded' }} to={app.url}> <app.icon style={{ width: 30, height: 30, marginRight: 10 }} />{app.name}</Link>
                </li>
              )
            })
          }
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;