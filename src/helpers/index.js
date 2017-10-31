export function formatVacancyCount (count, form1, form2, form3) {
  let num = Math.abs(count) % 100,
    formatedString = `${num} ${form3}`;

  if (num > 20) {
    num = Math.abs(count) % 10;
  }
  if (num > 10 && num < 20) formatedString = `${num} ${form3}`;
  if (num > 1 && num < 5) formatedString = `${num} ${form2}`;
  if (num === 1) formatedString = `${num} ${form1}`;

  return formatedString;
}