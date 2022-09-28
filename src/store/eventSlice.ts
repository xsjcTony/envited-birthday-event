import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface Event {
  name: string
  host: string
  start: Date
  end: Date
  location: {
    street: string
    suburb: string
    state: string
    postcode: string
  }
  photo: unknown // type unknown
}


/*
const initialState: Event = {
  name: '',
  host: '',
  start: new Date(),
  end: new Date(),
  location: {
    street: '',
    suburb: '',
    state: '',
    postcode: '0000'
  },
  photo: null
}
*/

const initialState: Event = {
  name: 'Birthday Bash',
  host: 'Elysia',
  start: new Date(),
  end: new Date(),
  location: {
    street: '1 Ferguson Street',
    suburb: 'Black Rock',
    state: 'VIC',
    postcode: '3193'
  },
  photo: null
}


export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    createEvent: (state, action: PayloadAction<Event>) => {
      state = { ...action.payload }
    },
    modifyLocation: (state, action: PayloadAction<Event['location']>) => {
      state.location = action.payload
    }
    // other modifiers
  }
})

export const { createEvent, modifyLocation } = eventSlice.actions

export default eventSlice.reducer
