export const rules = [
  {
    id: 1,
    description: "비밀번호에 대문자 하나 포함하세요",
    check: (password) => /[A-Z]/.test(password),
  },
  {
    id: 2,
    description: "숫자 하나 포함해야 함",
    check: (password) => /\d/.test(password),
  },
  {
    id: 3,
    description: "특수문자 포함 (!@#$ 등)",
    check: (password) => /[!@#$%^&*]/.test(password),
  },
  {
    id: 4,
    description: "비밀번호에 '비밀번호'라는 단어 금지",
    check: (password) => !password.includes('비밀번호'),
  },
  {
    id: 5,
    description: "길이는 12자 이상",
    check: (password) => password.length >= 12,
  }
];