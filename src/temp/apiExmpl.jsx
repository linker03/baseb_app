// @ts-nocheck
import axios from 'axios';
import StorageService from 'Services/Storage';
import { API_URL } from 'Utils/constants';

export default async (accessToken, optHeaders = {}) => {
  const token = accessToken || (await StorageService.getAccessToken());
  let headers = {};

  if (token) {
    headers = {
      authorization: `Bearer ${token}`,
      ...optHeaders,
    };
  }
  const instance = axios.create({
    headers,
    baseURL: API_URL,
  });
  return instance;
};

{"query":"query Profile($id:String!) { 
  profile(id: $id) { 
    id 
    first_name 
    last_name 
    position 
    position2 
    school_year 
    avatar 
    throws_hand 
    bats_hand 
    biography 
    feet 
    inches 
    weight 
    age 
      recent_events { 
        id 
        event_type 
        event_name 
        date 
        is_pitcher 
        data_rows_count 
        recent_avatars {   
          id   
          first_name   
          last_name   
          avatar } } 
    winsgspan 
    grip_right 
    grip_left 
    wrist_to_elbow 
    broad_jump 
    grip_left 
    act_score 
    gpa_score 
    sat_score 
    batting_top_values { 
      pitch_type 
      distance 
      launch_angle 
      exit_velocity } 
    pitching_top_values { 
      velocity 
      spin_rate 
      pitch_type } 
    pitcher_summary { 
      velocity 
      spin_rate 
      horizontal_break } 
    batter_summary { 
      exit_velocity 
      distance 
      launch_angle } 
    school { 
      id 
      name } 
    teams { 
      id 
      name } 
    facilities { 
      id 
      email 
      u_name } 
    favorite 
    events_opened 
    paid } }","variables":{"id":"719"}}