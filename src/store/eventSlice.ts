import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface Event {
  name: string
  host: string
  start: string
  end: string
  location: {
    street: string
    suburb: string
    state: string
    postcode: string
  }
  photo: unknown // type unknown
}


const initialState: Event = {
  name: '',
  host: '',
  start: moment().format('DD MMMM h:mmA'),
  end: moment().format('DD MMMM h:mmA'),
  location: {
    street: '',
    suburb: '',
    state: '',
    postcode: '0000'
  },
  photo: null
}

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    createEvent: (state, action: PayloadAction<Event>) => {
      const { name, host, start, end, location, photo } = action.payload

      state.name = name
      state.host = host
      state.start = start
      state.end = end
      state.location = location
      state.photo = photo
    },
    modifyLocation: (state, action: PayloadAction<Event['location']>) => {
      state.location = action.payload
    }
    // other modifiers
  }
})

export const { createEvent, modifyLocation } = eventSlice.actions

export default eventSlice.reducer
