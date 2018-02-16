import { API_URL } from './config';
import { toJSON } from './util';

export const getAlbum = id =>
  fetch(`${API_URL}/albums/${id}`).then(toJSON);

export const getAlbums = ids =>
  fetch(`${API_URL}/albums?ids=${ids}`).then(toJSON);

export const getAlbumTracks = id =>
  fetch(`${API_URL}/albums/${id}/tracks`).then(toJSON);
