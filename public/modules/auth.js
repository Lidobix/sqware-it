import jwt from 'jsonwebtoken';
import { constants } from './constants.js';
import { getRandomInt } from './game_server.js';
import * as dotenv from 'dotenv';
dotenv.config();

export function creationToken(userName, id) {
  return jwt.sign({ userToken: userName, idToken: id }, process.env.SECRET);
}

export function testConnexion(liste, pseudo) {
  for (const player in liste) {
    if (liste[player].pseudo === pseudo) {
      return false;
    }
  }
  return true;
}

export function defineAvatar() {
  return constants.allAvatars[getRandomInt(constants.allAvatars.length - 1)];
}
