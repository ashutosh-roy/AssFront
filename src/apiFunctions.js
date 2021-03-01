import service from "./request.js";
export function putMCQquestion() {
  return service({
    url: `mcqQuestions/`,
    method: "put",
    data
  });
}
export function postMCQquestion() {
  return service({
    url: `mcqQuestions/`,
    method: "post",
    data
  });
}
export function deleteMCQquestion() {
  return service({
    url: `mcqQuestions/`,
    method: "delete",
    data
  });
}
export function getMCQquestion() {
  return service({
    url: `mcqQuestions/`,
    method: "get",
    data
  });
}
export function putCommonQuestion() {
  return service({
    url: `mcqQuestions/`,
    method: "put",
    data
  });
}
export function postCommonQuestion() {
  return service({
    url: `mcqQuestions/`,
    method: "post",
    data
  });
}
export function getCommonQuestion() {
  return service({
    url: `mcqQuestions/`,
    method: "get",
    data
  });
}
export function deleteCommonQuestion() {
  return service({
    url: `mcqQuestions/`,
    method: "delete",
    data
  });
}
