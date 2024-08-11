"use strict";

const emojiElem = document.querySelector('.emoji');

const emojies = [
  '😄',
  '🤓',
  '😎',
  '😅',
  '🥳',
  '🤯',
  '😇',
  '😜',
  '😤',
  '🤔',
  '😈',
  '😭',
  '😡',
  '🥶',
  '🥺',
  '🤪',
  '😏',
  '🙄',
  '😬',
  '😱',
  '😴',
  '🥸',
  '😇',
  '😆',
  '🤠',
  '😵',
  'run.'
];

function randomEmoji () {
  let emoji = emojies[Math.floor(Math.random() * emojies.length)];

  setEmoji(emoji);
}

function setEmoji(emoji) {
  emojiElem.innerHTML = emoji;
}

emojiElem.addEventListener('mouseout', randomEmoji);