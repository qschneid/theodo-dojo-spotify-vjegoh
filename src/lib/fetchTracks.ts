import { useQuery } from '@tanstack/react-query/build/lib/useQuery';
import { SavedTrack } from 'spotify-types';

const apiToken: string =
  'BQD2v0403xZQNnXb2e00aBhiwuY-nW8C1atigP8jd-yxndN5WeRDnSXmbEL9ConrT0jlCWdrHEXrWE8CUbcgtXYOsAFsJFb5sJq4m3b-K_rg-2MgNVjhZwCzaqxNd2einUSKFajkV-h32roa9deJsgjuw4gW2PXzP8PwRhJcNPI4Shm_KzPVxWrntPp36NJq0_M2g2bQHBTZ4bwgIrcVIw';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: SavedTrack[] };

  return data.items;
};
