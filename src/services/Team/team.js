import { client, checkError } from '../client';

export async function fetchTeamById(id) {
  const resp = await client.from('teams').select('*, players(*)').single().match({ id });
  return checkError(resp);
}
