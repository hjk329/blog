import FormMessage from "./FormMessage";

export const firebaseErrorTypes = {
  AUTH_USER_NOT_FOUND: 'auth/user-not-found',
  AUTH_WRONG_PASSWORD: 'auth/wrong-password',
}

export const MessageTypes = {
  required: <FormMessage error>필수 입력 사항입니다.</FormMessage>,
  isEmail: <FormMessage error>올바른 이메일을 입력해주세요.</FormMessage>,
  isPassword: <FormMessage error>최소 8자리(숫자,문자,특수문자 최소 1개)로 입력해주세요.</FormMessage>,
  maxLength: <FormMessage error>6글자 이상 입력해주세요.</FormMessage>,
  confirm: <FormMessage error>동일한 비밀번호를 입력해주세요.</FormMessage>,
  [firebaseErrorTypes.AUTH_USER_NOT_FOUND]: <FormMessage error>가입되지 않은 이메일입니다.</FormMessage>,
  [firebaseErrorTypes.AUTH_WRONG_PASSWORD]: <FormMessage error>비밀번호가 일치하지 않습니다.</FormMessage>,

}
