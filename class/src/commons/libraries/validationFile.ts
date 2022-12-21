export const checkValidationFile = (file?: File) => {
  // 파일의 사이즈가 없다
  if (typeof file === "undefined") {
    alert("파일이 없습니다!");
    return false;
  }

  // 1024*1024 는 1MB ,
  if (file?.size > 5 * 1024 * 1024) {
    alert("파일의 용량이 너무 큽니다. (제한: 5MB)");
    return false;
  }

  // png, jpeg 등 파일 형식을 정해주고 싶을 때
  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    alert("jpeg 파일 또는 png 파일만 업로드 가능합니다!!!");
    return false;
  }

  return true;
};
