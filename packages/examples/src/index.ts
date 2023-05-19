export type PathResolver = (path: string) => Promise<string | undefined>;

export const join = (dir: string, path: string): string => {
  if (path.startsWith("/")) return path;
  const parts = dir.split("/");
  for (const part of path.split("/")) {
    if (part === "..") parts.pop();
    else if (part !== ".") parts.push(part);
  }
  return parts.join("/");
};

export interface Style {
  contents: string;
  resolver: PathResolver;
}

export interface Trio {
  substance: string;
  style: Style[];
  domain: string;
  variation: string;
}

export interface Meta {
  get: () => Promise<Trio>;
  name?: string;
  gallery?: boolean;
}
