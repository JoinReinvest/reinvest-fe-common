import { NOTIFICATION_HIGHLIGHT_PLACEHOLDER } from '../constants/notifications';

/** Result is intended to be used in `dangerouslySetInnerHtml` */
export function highlightNotificationDescription(text: string): string {
  const words = text.split(' ');
  const maybeHighlightedWords = words
    .map(word => {
      const matchesPlaceholder = doesMatchHighlightPlaceholder(word);

      if (matchesPlaceholder) {
        const wordWithoutPlaceholder = word.replace(/{{|}}/g, '');
        return parseToHTML(wordWithoutPlaceholder);
      }

      return word;
    });

  return maybeHighlightedWords.join(' ');
};

function parseToHTML(word: string) {
  return `<span class="font-bold">${word}</span>`;
}

function doesMatchHighlightPlaceholder(word: string) {
  return word.startsWith(NOTIFICATION_HIGHLIGHT_PLACEHOLDER.start) && word.endsWith(NOTIFICATION_HIGHLIGHT_PLACEHOLDER.end);
}
