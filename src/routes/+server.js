// src/routes/+page.js
import { goto } from '$app/navigation';

export async function load({ url }) {
  const domain = url.searchParams.get('domain');
  if (domain) {
    const res = await fetch(`/api/domain-check?domain=${domain}`);
    const data = await res.json();
    if (data.available) {
      return { available: true, domain };
    } else {
      return { available: false, error: data.error };
    }
  }
  return {};
}