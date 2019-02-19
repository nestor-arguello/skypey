import { getMessages } from '../static-data'
import { SEND_MESSAGE } from '../constants/action-types'

export default (state = getMessages(10), action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const { message, userId } = action.payload
      const allUserMsgs = state[userId]
      const number = Object.keys(allUserMsgs).length
      const newMessage = {
        number,
        text: message,
        is_user_msg: true
      }
      const newUserMsgs = { ...allUserMsgs, [number]: newMessage }
      const newMessagesState = { ...state, [userId]: newUserMsgs }

      return newMessagesState

    default:
      return state
  }
}
