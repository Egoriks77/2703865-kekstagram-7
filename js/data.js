import { getRandomInteger } from './util.js';

const PHOTO_COUNT = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const MIN_AVATAR = 1;
const MAX_AVATAR = 6;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Артём', 'Мария', 'Иван', 'Елена', 'Максим', 'София', 'Дмитрий', 'Анна'
];

let commentIdCounter = 1;

function generateMessage() {
  const count = getRandomInteger(1, 2);
  const availableMessages = MESSAGES.slice();
  let messageText = '';

  for (let i = 0; i < count; i++) {
    const randomIndex = getRandomInteger(0, availableMessages.length - 1);
    messageText += `${availableMessages[randomIndex]} `;
    availableMessages.splice(randomIndex, 1);
  }

  return messageText.trim();
}

function createComment() {
  const randomNameIndex = getRandomInteger(0, NAMES.length - 1);
  const randomAvatarNumber = getRandomInteger(MIN_AVATAR, MAX_AVATAR);

  return {
    id: commentIdCounter++,
    avatar: `img/avatar-${randomAvatarNumber}.svg`,
    message: generateMessage(),
    name: NAMES[randomNameIndex]
  };
}

function createPhotoUser(id) {
  const randomLikes = getRandomInteger(MIN_LIKES, MAX_LIKES);
  const commentsCount = getRandomInteger(MIN_COMMENTS, MAX_COMMENTS);
  const photoComments = [];

  for (let i = 0; i < commentsCount; i++) {
    photoComments.push(createComment());
  }

  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: `Описание фотографии номер ${id}`,
    likes: randomLikes,
    comments: photoComments
  };
}

function generatePhotos() {
  const result = [];

  for (let i = 1; i <= PHOTO_COUNT; i++) {
    const newPhoto = createPhotoUser(i);
    result.push(newPhoto);
  }

  return result;
}

const photosData = generatePhotos();

export { photosData };
