import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchUserById = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId, thunkAPI) => {
        const response = await userAPI.fetchById(userId)
        return response.data
    }
)

const { actions, reducer } = createSlice({
    name: 'users',
    initialState: '',
    reducers: {},
    extraReducers: (builder) => {
        // console.log(builder)
        builder.addCase(fetchUserById.pending, (state, action) => {
            state.loading = true;
            state.whoseDataIsLoading = action.payload;
        })
    }
});