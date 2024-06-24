import { useState, useEffect } from 'react'
import './App.css'
import LevelCard from './components/Paths/LevelCard'
import List from './components/Paths/StampRaw/List'

function App() {
  const [level, setLevel] = useState<string>('');
  const [level_Img, setLevelImg] = useState<string>('');
  const [restpoint, SetRestpoint] = useState<number>(0);
  const [point, setPoint] = useState<number>(0);
  const [number, setNumber] = useState<number[]>([]);
  const [Image_name, setImageName] = useState<string[]>([]);
  

  useEffect(() => {
    const currentURL = window.location.href;
    const queryString = currentURL.split("?")[1];
    

    if (queryString) {
      const params = new URLSearchParams(queryString);
      setLevelImg(decodeURIComponent(params.get('level_Img') || ''));
      setLevel(params.get('level') || '');
      SetRestpoint(Number((params.get('rest_point') || '')))
      setPoint(Number((params.get('point') || '')));

      // const matrix: number[] = Array.from(Array(9), (_, i) => i + 1);
      // 14日ver
      const matrix: number[] = Array.from(Array(6), (_, i) => i + 1);
      // const level_point_matrix: number[] = [1,2,3,5,5,5,7,7,7,9,9]
      // // 14日バージョン
      const level_point_matrix: number[] = [1,2,3,4,4]
      const level_point = level_point_matrix[parseInt(level) - 1]

      const stamp_matrix = matrix.map((index) => {
        if (index < point) {
          return 100;
        } else {
          return index;
        }
      });

      const level_update_matrix = stamp_matrix.map((value, index) => {
        if (index === level_point - 1) {
          return 10000; //ゴールの位置
        } else if (index < level_point - 1) {
            return value; //数字＋丸のみ
        } else {
            return 1000; //丸のみ
        }
      });

        setNumber(level_update_matrix)
      
      // const name = ["きりんちゃんのたまご", "たまごからうまれたきりんちゃん",
      // "きりんちゃん幼稚園", "きりんちゃんランドセル",
      // "きりんちゃん制服", "きりんちゃんサッカー",
      // "きりんちゃん勉強", "きりんちゃん博士",
      // "きりんちゃん白衣", "きりんちゃんかがみ餅",
      // "きりんちゃんトレーニング", "きりんちゃん仙人"]

      // 各レベルごとのきりんちゃんのイラスト(14日ver)
      const name = ["0.きりんちゃんのたまご", "1.たまごからうまれたきりんちゃん",
                "2.きりんちゃん幼稚園", "3.きりんちゃんランドセル",
                "4.きりんちゃん制服", "7.きりんちゃん博士"]

      setImageName(name)
    }
  }, [restpoint, point]);

  return (
    <>
      <header>
        <h1>きりんちゃん</h1>
      </header>

      <div className="display_level">
          <h2>{Image_name[parseInt(level)-1]}</h2>
        </div>
      
      <div className="display_kirinchan">
        <div className="kirinchan-img">
        <img src={`https://storage.googleapis.com/tablet2/kirinchan/${level_Img}.PNG`} 
            alt="Image" /> 

        </div>
      </div>

      <div className="stamp_card">
        <h2>ポイントカード</h2>
        {/* <h3>{number}</h3> */}
        <div className="first_row">
        </div>

        <LevelCard
          level={parseInt(level)} matrix={number} 
        />
      </div>

      <List
      first_sent='次のステージまで'
      second_sent='あと・・・'
      volume = {restpoint.toString()}
      unit='Pt'
      />


      
            
      <footer>
      © {new Date().getFullYear()} Your Company. All rights reserved.
      </footer>
    </>
  )
}

export default App
