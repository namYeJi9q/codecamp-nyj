import { from } from "zen-observable";
export default function ObservableFlatmapPage() {
  const onClickButton = () => {
    // new Promise(() => {})
    // new Observable(() => {})

    // zen에서 가져옴.
    // prettier-ignore
    from(["1번 useQuery", "2번 useQuery", "3번 useQuery"]) // formPromise
      .flatMap((el: string) => from([`${el} 결과에 qqq 적용`, `${el} 결과에 zzz 적용`]))
      .subscribe((el) => console.log(el));
  };

  return <button onClick={onClickButton}>클릭</button>;
}
