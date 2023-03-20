import {
  Denops,
  exists,
  dirname,
  basename,
  ensureDir,
  vars,
} from "./deps.ts";
import { get_filepath, create_content } from "./dailynote.ts";

export async function main(denops: Denops): Promise<void> {
  denops.dispatcher = {
    async create(timedelta: string): Promise<void> {
      let pathfmt = await vars.globals.get(denops, "dailynote_pathfmt") as string;
      if (!pathfmt) {
        pathfmt = 'YYYY/YYYY-MM/YYYY-MM-dd';
      }
      const filepath = get_filepath(+timedelta, pathfmt);
      const content = await create_content(basename(filepath));

      if (await exists(filepath)) {
        await denops.cmd(`e ${filepath}`);
      } else {
        await ensureDir(dirname(filepath));
        await denops.cmd(`e ${filepath}`);
        await denops.call('setline', 1, content.split(/\r?\n/g));
      }
      return Promise.resolve();
    },
  }

  await denops.cmd(`command! -nargs=? DailyNoteCreate call denops#request('${denops.name}', 'create', [<q-args>])`);
}
