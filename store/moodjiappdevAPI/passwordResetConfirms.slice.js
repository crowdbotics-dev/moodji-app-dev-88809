import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const rest_auth_password_reset_confirm_create = createAsyncThunk(
  "passwordResetConfirms/rest_auth_password_reset_confirm_create",
  async payload => {
    const response = await apiService.rest_auth_password_reset_confirm_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const passwordResetConfirmsSlice = createSlice({
  name: "passwordResetConfirms",
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
  }
})
export default {
  rest_auth_password_reset_confirm_create,
  slice: passwordResetConfirmsSlice
}
