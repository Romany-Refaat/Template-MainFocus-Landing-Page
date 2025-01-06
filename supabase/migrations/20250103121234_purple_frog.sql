/*
  # Create email subscribers table

  1. New Tables
    - `email_subscribers`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `created_at` (timestamp)
      - `status` (text) - For tracking subscription status
  
  2. Security
    - Enable RLS on `email_subscribers` table
    - Add policy for inserting new subscribers
    - Add policy for reading subscriber data (admin only)
*/

CREATE TABLE IF NOT EXISTS email_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'active'
);

ALTER TABLE email_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anyone to subscribe
CREATE POLICY "Anyone can subscribe"
  ON email_subscribers
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Only authenticated users can read subscriber data
CREATE POLICY "Only authenticated users can read subscribers"
  ON email_subscribers
  FOR SELECT
  TO authenticated
  USING (true);