import service from "./request.js";
export function putMCQquestion(data) {
  return service({
    url: `mcqQuestions/`,
    method: "put",
    data
  });
}
export function postMCQquestion(data) {
  return service({
    url: `mcqQuestions/`,
    method: "post",
    data
  });
}
export function deleteMCQquestion(data) {
  return service({
    url: `mcqQuestions/`,
    method: "delete",
    data
  });
}
export function getMCQquestion() {
  return service({
    url: `mcqQuestions/`,
    method: "get"
  });
}
export function putCommonQuestion(data) {
  return service({
    url: `commonQuestions/`,
    method: "put",
    data
  });
}
export function postCommonQuestion(data) {
  return service({
    url: `commonQuestions/`,
    method: "post",
    data
  });
}
export function getCommonQuestion() {
  return service({
    url: `commonQuestions/`,
    method: "get"
  });
}
export function deleteCommonQuestion(data) {
  return service({
    url: `commonQuestions/`,
    method: "delete",
    data
  });
}
