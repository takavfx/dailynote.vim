import { resolve, join, datetime } from './deps.ts';

export function get_filepath(timedelta: number, pathfmt: string): string {
  const date = datetime().add({day: timedelta});
  const root = resolve('.');
  const filepath = join(
    root,
    date.format(pathfmt) + '.md');
  return filepath;
}

export async function create_content(basename: string): Promise<string> {
  const title = `# Daily Note: ${basename}\n`;
  let content = title;
  try {
    content = title + '\n' + await Deno.readTextFile('./template.md');
  } catch {
    content = title;
  }
  return content;
}
