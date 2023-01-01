export const getDate = (value: any) => {
  const date = new Date(value);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

export const getCreated = (value: any) => {
  const nowdate = new Date(value);
  const now = new Date();

  const YYYY = nowdate.getFullYear();
  const MM = nowdate.getMonth();
  const DD = nowdate.getDate();
  const HOUR = nowdate.getHours();
  const MINUTES = nowdate.getMinutes();
  const SECONDS = nowdate.getSeconds();

  const yyyy = now.getFullYear();
  const mm = now.getMonth();
  const dd = now.getDate();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  let FewYear = yyyy - YYYY;
  let FewMonth = mm - MM;
  let FewDay = dd - DD;
  let FewHour = hour - HOUR;
  let FewMinutes = minutes - MINUTES;
  let FewSeconds = seconds - SECONDS;

  if (FewYear > 0) {
    return FewYear + "년 전";
  } else if (FewMonth > 0) {
    return FewMonth + "월 전";
  } else if (FewDay > 0) {
    return FewDay + "일 전";
  } else if (FewHour > 0) {
    return FewHour + "시간 전";
  } else if (FewMinutes > 0) {
    return FewMinutes + "분 전";
  } else {
    return FewSeconds + "초 전";
  }
};
