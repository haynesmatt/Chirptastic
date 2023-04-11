import { createClient } from '@supabase/supabase-js'

const URL = 'https://wjaacfdzorrsvwuzgctc.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqYWFjZmR6b3Jyc3Z3dXpnY3RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExNTkxNjksImV4cCI6MTk5NjczNTE2OX0.6WmeLLY077yPJKlbgLXNI4APKsOq6yWpV-CI-QnUHQQ';

export const supabase = createClient(URL, API_KEY);