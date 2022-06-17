import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import Test from "./Test"

const People =()=> {
  return (
    <>
      <p>People</p>
    </>
  );
}

const App =()=> {
  const [data, setData] = useState(null);

  const axiosTest = async () => {
    try {
      return await axios.get('http://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json');
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=> {
    // fetch("http://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json")
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (myJson) {
    //     console.log(myJson);
    //     setData(myJson.data);
    //   });
    
    // data에 중괄호 적은 이유는 axios에서는 기본적으로 data로 받아오기 때문에 JS 구조분해를 사용해야만 원래 데이터 모습대로 가져올 수 있음.
    axiosTest()
      .then(({data}) => {
        setData(data.data);
      })
  }, []);

  if(data == null) {
    return <p>Loading...</p>
  }

  return (

    <>
      <div>
        <Test />
        <People />
        {data.people.map((person) => (
          <div key={person.name}>
            <span>name : {person.name}</span>
            <span>age : {person.age}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
