export type DrawerParamList = {
  Main: undefined;
  Profile: undefined;
  Settings: undefined;
  Reports: undefined;
  Categories: undefined;
  About: undefined;
};

export type BottomTabParamList = {
  Dashboard: undefined;
  Transactions: undefined;
  AddTransaction: undefined;
  Analytics: undefined;
  Budget: undefined;
};

export type RootStackParamList = {
  Drawer: undefined;
  TransactionDetail: { transactionId: string };
  EditTransaction: { transactionId: string };
};
