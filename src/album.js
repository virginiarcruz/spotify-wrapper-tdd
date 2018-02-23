import { API_URL, HEADERS } from './config';
import { toJSON } from './util';

export const getAlbum = id =>
  fetch(`${API_URL}/albums/${id}`, HEADERS).then(toJSON);

export const getAlbums = ids =>
  fetch(`${API_URL}/albums?ids=${ids}`, HEADERS).then(toJSON);

export const getAlbumTracks = id =>
  fetch(`${API_URL}/albums/${id}/tracks`, HEADERS).then(toJSON);
