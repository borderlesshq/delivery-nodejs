export const FormatResponse = (response: any, method: string) => {
  if (
    response.data &&
    response.data[method] &&
    response.data[method]["success"] == false
  ) {
    return {
      data: undefined,
      error: response.data[method].message,
    };
  }
  return {
    data: response.data ? response.data[method] : undefined,
    error:
      response["success"] == false
        ? response.message
        : response.errors
        ? response.errors
        : undefined,
  };
};
