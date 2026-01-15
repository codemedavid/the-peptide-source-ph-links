-- 1. Truncate existing links to start fresh
TRUNCATE TABLE links;

-- 2. Insert new links
INSERT INTO links (text, subtext, href, icon, variant, active, order_index) VALUES
-- Header: Primary Actions
('Primary Actions', NULL, '#', NULL, 'header', true, 1),
('Price List', NULL, 'https://the-peptide-source-ph.vercel.app', '💰', 'primary', true, 2),
('Order & Inquiries (WhatsApp)', NULL, 'https://wa.me/639953928293', '💬', 'primary', true, 3),
('Chat With Us (Messenger)', NULL, 'https://www.facebook.com/share/176BcpFAUF/?mibextid=wwXIfr', '💬', 'primary', true, 4),

-- Header: Follow & Connect
('Follow & Connect', NULL, '#', NULL, 'header', true, 5),
('Facebook — The Peptide Source PH', NULL, 'https://www.facebook.com/share/14a9hoDToGS/?mibextid=wwXIfr', '📘', 'secondary', true, 6),
('TikTok — @peptidesourceph', NULL, 'https://www.tiktok.com/@peptidesourceph?_r=1&_t=ZS-931t3ljE9g4', '🎵', 'secondary', true, 7),

-- Header: Contact Details
('Contact Details', NULL, '#', NULL, 'header', true, 8),
('WhatsApp / Phone: 09953928293', NULL, 'tel:+639953928293', '📱', 'secondary', true, 9);
