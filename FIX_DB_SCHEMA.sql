-- 1. Fix Schema: Add ALL potentially missing columns
ALTER TABLE links ADD COLUMN IF NOT EXISTS subtext text;
ALTER TABLE links ADD COLUMN IF NOT EXISTS active boolean DEFAULT true;
ALTER TABLE links ADD COLUMN IF NOT EXISTS variant text DEFAULT 'primary';
ALTER TABLE links ADD COLUMN IF NOT EXISTS icon text;

-- Handle 'order' vs 'order_index' mismatch safely
DO $$
BEGIN
  IF EXISTS(SELECT * FROM information_schema.columns WHERE table_name='links' and column_name='order') THEN
      ALTER TABLE "links" RENAME COLUMN "order" TO "order_index";
  END IF;
END $$;

ALTER TABLE links ADD COLUMN IF NOT EXISTS order_index integer DEFAULT 0;

-- 2. Ensure Permissions (RLS)
-- Enable RLS
ALTER TABLE links ENABLE ROW LEVEL SECURITY;

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Public links are viewable by everyone" ON links;
DROP POLICY IF EXISTS "Public can manage links" ON links;

-- Re-create Policies
CREATE POLICY "Public links are viewable by everyone"
  ON links FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Public can manage links"
  ON links FOR ALL
  TO anon
  USING (true);

-- 3. Clear Table
TRUNCATE TABLE links;

-- 4. Insert Data
INSERT INTO links (text, subtext, href, icon, variant, active, order_index) VALUES
('Primary Actions', NULL, '#', NULL, 'header', true, 1),
('Price List', NULL, 'https://the-peptide-source-ph.vercel.app', '💰', 'primary', true, 2),
('WhatsApp', NULL, 'https://wa.me/639953928293', '💬', 'primary', true, 3),
('Messenger', NULL, 'https://www.facebook.com/share/176BcpFAUF/?mibextid=wwXIfr', '💬', 'primary', true, 4),
('Follow & Connect', NULL, '#', NULL, 'header', true, 5),
('Facebook', NULL, 'https://www.facebook.com/share/14a9hoDToGS/?mibextid=wwXIfr', '📘', 'secondary', true, 6),
('TikTok', NULL, 'https://www.tiktok.com/@peptidesourceph?_r=1&_t=ZS-931t3ljE9g4', '🎵', 'secondary', true, 7),
('Contact Details', NULL, '#', NULL, 'header', true, 8),
('09953928293', NULL, 'tel:+639953928293', '📱', 'secondary', true, 9);
