import jwt from 'jsonwebtoken';
import { constants } from './constants.js';
import { getRandomInt } from './game_server.js';
import * as dotenv from 'dotenv';
dotenv.config();

export function creationToken(userName, id) {
  return jwt.sign({ userToken: userName, idToken: id }, process.env.SECRET);
}

export function alreadyLogged(liste, pseudo) {
  console.log('dans already logged');
  // console.log(liste.filter((e) => e.pseudo === pseudo).length);
  console.log(liste);
  // console.log(pseudo);
  return liste.filter((e) => e.pseudo === pseudo).length !== 0;

  // for (const player in liste) {
  //   if (liste[player].pseudo === pseudo) {
  //     return true;
  //   }
  // }
  // return false;
}

export function defineAvatar() {
  return constants.allAvatars[getRandomInt(constants.allAvatars.length - 1)];
}
