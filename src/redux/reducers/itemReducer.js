import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('fetchData',async () => {
  const response = await axios.get(
    'https://5fc9346b2af77700165ae514.mockapi.io/simpsons'
  );
  response.data.map((item) => {
    initialState.data.push(item)
  })
  return response.data;
})
fetchData();

const initialState = {
  data:[]
}

export const listSlice = createSlice({
  name:"itemList",
  initialState,
  reducers:{
    addItem: (state, action) => {
      state.data.push(action.payload)
    },
    removeItem: (state, action) => {
      state.data = state.data.filter((item) => item.id != action.payload);
    },
    upItem: (state, action) => {
      if(state.data[action.payload - 1] != null){
        const up = state.data[action.payload - 1]
        state.data[action.payload - 1] = state.data[action.payload]
        state.data[action.payload] = up
      }
      state;
    },
    downItem: (state, action) => {
      if(state.data[action.payload + 1] != null){
        const down = state.data[action.payload + 1]
        state.data[action.payload + 1] = state.data[action.payload]
        state.data[action.payload] = down
      }
      state;
    },
  },
  // extraReducers:(builder) => {
  //   builder.addCase(fetchData.fulfilled, (state, action) => {
  //     state.data = action.payload;
  //   })
  // }
})

export const { addItem, removeItem, upItem, downItem } = listSlice.actions;
export default listSlice.reducer;
