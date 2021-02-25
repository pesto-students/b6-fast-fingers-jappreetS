const COLOR_CODES = {
  GREEN: '#54BA18',
  PURPLE: '#445298',
};

const DIFFICULTY_LEVEL = [
  { value: 'easy', label: 'EASY' },
  { value: 'medium', label: 'MEDIUM' },
  { value: 'hard', label: 'HARD' },
];

const DIFFICULTY_LEVEL_STRINGS = {
  easy: 'easy',
  medium: 'medium',
  hard: 'hard',
};

const DIFFICULTY_LEVEL_VALUE = {
  easy: 1,
  medium: 1.5,
  hard: 2,
};

const ROUTES = {
  HOME: '/',
  GAME: '/game',
};

const STORAGE_TYPES = {
  LOCAL_STORAGE: 'local_storage',
  SESSION_STORAGE: 'session_storage',
};

const STORAGE_TYPE_VALUES = {
  local_storage: 1,
  session_storage: 0,
};

const SUCCESS_INCREASE_DIFFICULTY_FACTOR = 0.01;

export {
  COLOR_CODES,
  DIFFICULTY_LEVEL,
  DIFFICULTY_LEVEL_STRINGS,
  DIFFICULTY_LEVEL_VALUE,
  ROUTES,
  STORAGE_TYPES,
  STORAGE_TYPE_VALUES,
  SUCCESS_INCREASE_DIFFICULTY_FACTOR,
};