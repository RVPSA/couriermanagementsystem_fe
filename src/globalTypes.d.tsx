type currentUserType = {
  userName: string;
  userId: number;
  userRoleId: number;
};

type actionType = {
  type: string;
  data?: any;
};
type generalResponse = {
  statusCode: number;
  message: string;
  result: any;
};
type sagaInputType = {
  type: string;
  data: any;
};
