import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  IRequestDetails,
  VisaStatus
} from "../../types/interfaces";
import { allRequests } from "../../utils/consts";
// entriesNumber
const initialState: IRequestDetails[] = allRequests;

const allRequestDetailsSlice = createSlice({
  name: "AllRequestsDetails",
  initialState,
  reducers: {
    updateRequestStatus: (
      state: IRequestDetails[],
      action: PayloadAction<{ id: number; status: VisaStatus }>
    ) => {
      const requestIndex = state.findIndex(
        (request) => request.id === action.payload.id
      );

      if (requestIndex !== -1) {
        state[requestIndex].status = action.payload.status;
      }
    },

    updateAllRequestsOrdering: (
      state: IRequestDetails[],
      action: PayloadAction<IRequestDetails[]>
    ) => {
      console.log(action.payload);
      return action.payload;
    },
  },
});

export const { updateRequestStatus, updateAllRequestsOrdering } =
  allRequestDetailsSlice.actions;
export default allRequestDetailsSlice.reducer;
