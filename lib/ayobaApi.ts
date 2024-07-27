// lib/ayobaApi.ts

const AYOBA_API_BASE_URL = 'https://api.ayoba.me/v1';
const AYOBA_API_KEY = 'your_ayoba_api_key_here';

async function ayobaFetch(endpoint: string, options: RequestInit = {}) {
  const url = `${AYOBA_API_BASE_URL}${endpoint}`;
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${AYOBA_API_KEY}`,
    ...options.headers,
  };

  const response = await fetch(url, { ...options, headers });
  if (!response.ok) {
    throw new Error(`Ayoba API error: ${response.statusText}`);
  }
  return response.json();
}

export async function sendMessage(userId: string, message: string) {
  return ayobaFetch('/messages', {
    method: 'POST',
    body: JSON.stringify({ userId, message }),
  });
}

export async function getCustomerProfile(userId: string) {
  return ayobaFetch(`/users/${userId}`);
}

// Add more API functions as needed