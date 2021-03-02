import { createSlice } from '@reduxjs/toolkit';

type RecentAvatar = {
  id: string | null | null;
  first_name: string | null;
  last_name: string | null;
  avatar: string | null;
};

type RecentEvent = {
  id: string | null;
  event_type: string | null;
  event_name: string | null;
  date: string | null;
  is_pitcher: boolean;
  data_rows_count: number | null;
  recent_avatars: RecentAvatar[];
};

type School = {
  id: string | null;
  name: string | null;
};

type Team = {
  id: string | null;
  name: string | null;
};

type Facility = {
  id: string | null;
  email: string | null;
  u_name: string | null;
};

type ProfileInitialState = {
  id: string | null;
  first_name: string | null;
  last_name: string | null;
  position: string | null;
  position2: string | null;
  school_year: string | null;
  avatar: string | null;
  throws_hand: string | null;
  bats_hand: string | null;
  biography: string | null;
  feet: number | null;
  inches: number | null;
  weight: number | null;
  age: number | null;
  recent_events: RecentEvent[];
  winsgspan: string | null;
  grip_right: string | null;
  grip_left: string | null;
  wrist_to_elbow: string | null;
  broad_jump: string | null;
  act_score: number | null;
  gpa_score: number | null;
  sat_score: number | null;
  batting_topValues: [];
  pitching_topValues: [];
  pitcher_summary: [];
  batter_summary: [];
  school: School;
  teams: Team[];
  facilities: Facility[];
  favorite: boolean;
  events_opened: boolean;
  paid: boolean;
};

const initialStateProfile: ProfileInitialState = {
  id: '',
  first_name: '',
  last_name: '',
  position: '',
  position2: '',
  school_year: '',
  avatar: '',
  throws_hand: '',
  bats_hand: '',
  biography: '',
  feet: null,
  inches: null,
  weight: null,
  age: null,
  recent_events: [],
  winsgspan: '',
  grip_right: '',
  grip_left: '',
  wrist_to_elbow: '',
  broad_jump: '',
  act_score: null,
  gpa_score: null,
  sat_score: null,
  batting_topValues: [],
  pitching_topValues: [],
  pitcher_summary: [],
  batter_summary: [],
  school: {
    id: '',
    name: '',
  },
  teams: [],
  facilities: [],
  favorite: false,
  events_opened: false,
  paid: false,
};

export const profileSlice = createSlice({
  name: 'profileSlice',
  initialState: initialStateProfile,
  reducers: {
    getCurrentProfile: (state, action) => {
      const result = action.payload;
      return { ...state, ...result };
    },
  },
});

export const { getCurrentProfile } = profileSlice.actions;
