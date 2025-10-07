const formatZodErrors = (error: any) => {
  return error.errors?.map((e: any) => ({
    path: e.path.join("."),
    message: e.message,
  }));
};
export default formatZodErrors;
