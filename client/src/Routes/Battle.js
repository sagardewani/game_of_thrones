import Home from 'views/Battle/grid';
import Battles from 'views/Battle/list';

const BattleRoutes = [
  { path: "/", exact: true, name: "Home", component: Home },
  { path: "/battles", exact: true, name: "Battles", component: Battles },
];

export default BattleRoutes;