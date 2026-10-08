# marketixstudio.com DNS records

Captured from Hostinger hPanel on 2026-10-08, before moving the domain registration to MilesWeb.
Nameservers at the time: `ns1.dns-parking.com`, `ns2.dns-parking.com` (Hostinger). Expiry 2027-02-22.

Check this against the live zone before relying on it. Everything here is public DNS data, no secrets.

| Type | Name | Priority | Content | TTL | What it is |
|---|---|---|---|---|---|
| A | @ | | 89.117.188.169 | 1800 | Website on Hostinger hosting (the current WordPress site) |
| AAAA | @ | | 2a02:4780:11:1048:0:efa:25ce:4 | 1800 | Same hosting over IPv6 |
| CNAME | www | | marketixstudio.com | 300 | www to the apex |
| MX | @ | 5 | mx1.hostinger.com | 14400 | Business mailbox (Hostinger Email) |
| MX | @ | 10 | mx2.hostinger.com | 14400 | Business mailbox (Hostinger Email) |
| TXT | @ | | "v=spf1 include:_spf.mail.hostinger.com ~all" | 3600 | SPF for Hostinger mail |
| CNAME | hostingermail-a._domainkey | | hostingermail-a.dkim.mail.hostinger.com | 300 | Hostinger mail DKIM |
| CNAME | hostingermail-b._domainkey | | hostingermail-b.dkim.mail.hostinger.com | 300 | Hostinger mail DKIM |
| CNAME | hostingermail-c._domainkey | | hostingermail-c.dkim.mail.hostinger.com | 300 | Hostinger mail DKIM |
| CNAME | autodiscover | | autodiscover.mail.hostinger.com | 300 | Mail client setup |
| CNAME | autoconfig | | autoconfig.mail.hostinger.com | 300 | Mail client setup |
| TXT | _dmarc | | "v=DMARC1; p=none" | 3600 | DMARC (monitor only) |
| CNAME | rsend | | rsend-apne1.forge.rmta.net | 3600 | Resend (website lead emails) |
| CNAME | send | | send.forge.rmta.net | 3600 | Resend (website lead emails) |
| TXT | resend._domainkey | | `p=MIGfMA0...` (long DKIM public key) | 14400 | Resend DKIM. Copy it from the Resend dashboard (Domains), do not retype it |

## If the zone has to be recreated at MilesWeb

1. Add every record above. Without the A/AAAA the site is down; without the MX/SPF/DKIM the mailbox breaks; without the Resend records the lead emails stop.
2. Point the domain at the nameservers that hold the zone, then test the site, the mailbox and a contact-form lead.

## When the new site moves to Vercel

Change only the website records, nothing else:
- `A @` and `CNAME www` to the values Vercel shows in Project, Domains.
- Delete the `AAAA @` record, or IPv6 visitors keep landing on the old Hostinger server.
- Keep every MX, SPF, DKIM, DMARC and Resend record as it is.
