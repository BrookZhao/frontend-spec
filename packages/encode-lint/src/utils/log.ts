import chalk from 'chalk';
import { EXEC_NAME, UNICODE } from './constants';

const { green, blue, yellow, red } = chalk;

export default {
  success(text: string) {
    console.log(green(text));
  },
  info(text: string) {
    console.info(blue(text));
  },
  warn(text: string) {
    console.info(yellow(text));
  },
  error(text: string) {
    console.error(red(text));
  },
  result(text: string, pass: boolean) {
    console.info(
      blue(`[${EXEC_NAME}] ${text}`),
      pass ? green(UNICODE.success) : red(UNICODE.failure),
    );
  },
};
