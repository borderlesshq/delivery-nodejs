export const FormatResponse = (response: any, method: string) => {
  return {
    data: response.data ? response.data[method] : undefined,
    error: !response.success ? response.message : undefined,
  };
};
