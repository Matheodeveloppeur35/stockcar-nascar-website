import { supabase } from './supabase.js';

const {
  data: { user }
} = await supabase.auth.getUser();

if (!user) {
  window.location.href =
    '/pages/admin/login.html';
}