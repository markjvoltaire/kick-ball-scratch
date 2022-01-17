import { client, checkError } from '../client';

export async function fetchPlayerById(id) {
  const resp = await client.from('players').select('*, teams(*)').single().match({ id });
  return checkError(resp);
}
