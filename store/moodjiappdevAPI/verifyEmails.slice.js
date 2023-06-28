import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const rest_auth_registration_verify_email_create = createAsyncThunk(
  "verifyEmails/rest_auth_registration_verify_email_create",
  async payload => {
    const response = await apiService.rest_auth_registration_verify_email_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const verifyEmailsSlice = createSlice({
  name: "verifyEmails",
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
  rest_auth_registration_verify_email_create,
  slice: verifyEmailsSlice
}
