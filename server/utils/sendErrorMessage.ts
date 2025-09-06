type ErrorCode = 400 | 401 | 402 | 403 | 404;

export default (code: ErrorCode, message: string) => {
  let statusMessage: string;
  switch (code) {
    case 400:
      statusMessage = "Bad Request";
      break;
    case 401:
      statusMessage = "Unauthorized";
      break;
    case 402:
      statusMessage = "Payment Required";
      break;
    case 403:
      statusMessage = "Forbidden";
      break;
    case 404:
      statusMessage = "Method Not Allowed";
      break;
    default:
      statusMessage = "Unknown Error";
      break;
  }
  return createError({
    code: code,
    statusCode: code,
    statusMessage: statusMessage,
    message: message,
  });
};
