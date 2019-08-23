import { format, parseISO, isBefore, subDays, addDays } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

/**
 * This method receives a date property and returns a date formatted in
 * Brazilian Portuguese in day and month format.
 */
export function formatDate(date) {
  return format(date, "dd 'de' MMMM", { locale: ptBR });
}

/**
 * This method receives a date property in string format and returns a date
 * formatted in Brazilian Portuguese in day, month, hour, and minute format.
 */
export function formatDateWithHour(date) {
  return format(parseISO(date), "dd 'de' MMMM 'às' HH:mm", { locale: ptBR });
}

/**
 * This method receives a date property in string format and returns true
 * if the specified date is before than the current date, or false if the date
 * has not yet passed.
 */
export function isDone(date) {
  return isBefore(parseISO(date), Date.now());
}

/**
 * This method receives a date property and returns the previous date.
 */
export function prevDay(date) {
  return subDays(date, 1);
}

/**
 * This method receives a date property and returns the next date.
 */
export function nextDay(date) {
  return addDays(date, 1);
}
