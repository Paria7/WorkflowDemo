export interface ProductKey {
  name: string;
}

export interface Plant {
  name: string;
}

export interface BusinessUnit {
  name: string;
}

/*  Product Line */
export interface ProductLine {
  name: string;
  plant: Plant;
  businessUnit: BusinessUnit;
  keys: Array<ProductKey>;
}

export interface MonthlyProductLine extends ProductLine {
  month: number;
  swd: number;
  oee: number;
  dt: number;
  pot: number;
}

export interface RouteNodeMonthlyProductLine extends MonthlyProductLine {
  route: Route;
  // routeNode: RouteNode;
  ct: number;
}

/*  Route */
export enum RouteType {
  bu1 = 1,
  bu2 = 2,
  bu3 = 3,
  bu4 = 4,
}

export enum RouteNodeType {
  mark = 1,
  purchase = 2,
}

export interface Route {
  name: string;
  plant: Plant;
  businessUnit: BusinessUnit;
  final: MarkRouteNode;
}

export interface RouteNode {
  type: RouteNodeType;
  outputNumber: number;
}

export interface MarkRouteNode extends RouteNode {
  productLine: ProductLine;
  subNodes: Array<MarkRouteNode | PurchaseRouteNode>;
}

export interface PurchaseRouteNode extends RouteNode {
  name: string;
}

/*  Request */
export interface Definition {
  name: string;
}

export interface Request {
  project: Definition;
  plant: Plant;
  route: Route;
  month: number;
  count: number;
}

export interface AdjustRequest {
  project: Definition;
  formPlant: Plant;
  toPlant: Plant;
  route: Route;
  fromMonth: number;
  toMonth: number;
  count: number;
}

export interface AdjustCountRequest {
  project: Definition;
  plant: Plant;
  route: Route;
  month: number;
  adjustCount: number;
}

/*  Plan */
export interface Plan {
  name: string;
  monthlyPlantPlans: Array<MonthlyPlantPlan>;
}

export interface MonthlyPlantPlan {
  month: number;
  plant: Plant;
  requests: Array<{ route: Route, count: number }>;
  outputs: Array<{ route: Route, count: number }>;
  productLineOutputs: Array<ProductLineOutput>;
}

export interface ProductLineOutput {
  productLine: ProductLine;
  outputs: Array<RouteNodeMonthlyOutputProductLine>;
}

export interface RouteNodeMonthlyOutputProductLine {
  days: number;
  productLine: RouteNodeMonthlyProductLine;
  adjustProductLineOptions: AdjustProductLineOptions;
  route: Route;
  count: number;
}

export interface AdjustProductLineOptions {
  swd: number;
  oee: number;
  dt: number;
  pot: number;
}
