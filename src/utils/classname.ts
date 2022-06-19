export const cn = (args: Array<string | any>) => args.filter((i) => typeof i === 'string').join(' ');
