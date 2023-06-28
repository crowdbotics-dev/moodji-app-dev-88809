import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_signup_create = createAsyncThunk(
  "signups/api_v1_signup_create",
  async payload => {
    const response = await apiService.api_v1_signup_create(payload)
    return response.data
  }
)
export const rest_auth_registration_create = createAsyncThunk(
  "signups/rest_auth_registration_create",
  async payload => {
    const response = await apiService.rest_auth_registration_create(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const signupsSlice = createSlice({
  name: "signups",
  initialState,
  reducers: {},
  extraReducers: builder => {
    return builder
      .addCase(pending, (state, action) => {
        state.api.loading = "pending"
      })
      .addCase(fulfilled, (state, action) => {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      })
      .addCase(rejected, (state, action) => {
        state.api.error = action.error
        state.api.loading = "idle"
      })
      .addCase(pending, (state, action) => {
        state.api.loading = "pending"
      })
      .addCase(fulfilled, (state, action) => {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      })
      .addCase(rejected, (state, action) => {
        state.api.error = action.error
        state.api.loading = "idle"
      })
  }
})
export default {
  api_v1_signup_create,
  rest_auth_registration_create,
  slice: signupsSlice
}
