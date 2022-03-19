import { answer } from '~/state'
import { getHint, GetRandomWord } from '../logic'
import { answers } from './list'

export function getAnswerOfDay(day: number, random: string|null) {
  let tmpWord: string, tmpHint : string
  console.log(day, random)
  if (random != null) {
    tmpWord = GetRandomWord(random)
    console.log(tmpWord)
    tmpHint = getHint(tmpWord)
  } else {
    tmpWord = answers[day][0],
    tmpHint = answers[day][1],
    [tmpWord = '', tmpHint = ''] = answers[day] || []
  }
  return {
    word: tmpWord,
    hint: tmpHint || getHint(tmpWord),
  }
}
